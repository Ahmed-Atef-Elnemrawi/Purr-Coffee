import { Injectable, Signal } from '@angular/core';
import { OrderService } from '../service/order-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderAPIActions } from './order-api.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { mergeMap, map, catchError, of, concatMap } from 'rxjs';
import { Item, Order } from '../../models';
import { Store } from '@ngrx/store';
import { OrderUIActions } from './order-ui.actions';
import sortBy from 'lodash-es/sortBy';
import { OrderState } from './order.feature';
import { currentOrder, getItem } from '.';

@Injectable()
export class OrderEffects {
  constructor(
    private orderService: OrderService,
    private action$: Actions,
    private store: Store<OrderState>
  ) {}

  getOrder$ = createEffect(() =>
    this.action$.pipe(
      ofType(OrderAPIActions.getOrder),
      mergeMap((action) =>
        this.orderService.getOrder(action.orderId).pipe(
          map((order) => OrderAPIActions.getOrderSuccess({ order })),
          catchError((err: HttpErrorResponse) =>
            of(OrderAPIActions.getOrderFailure({ error: err.message }))
          )
        )
      )
    )
  );

  createOrder$ = createEffect(() =>
    this.action$.pipe(
      ofType(OrderAPIActions.createOrder),
      concatMap((action) =>
        this.orderService.createOrder(action.order).pipe(
          map((order) => OrderAPIActions.createOrderSuccess({ order })),
          catchError((err: HttpErrorResponse) =>
            of(OrderAPIActions.createOrderFailure({ error: err.message }))
          )
        )
      )
    )
  );

  addToCart$ = createEffect(() =>
    this.action$.pipe(
      ofType(OrderUIActions.addToCart),
      map(({ item }) => {
        let current = this.store.selectSignal(currentOrder);
        if (current() === null) return this.initCartIfItEmpty(item);
        else return this.addToCart(current(), item);
      })
    )
  );

  removeFromCart$ = createEffect(() =>
    this.action$.pipe(
      ofType(OrderUIActions.removeFromCart),
      map(({ itemId }) => {
        let current = this.store.selectSignal(currentOrder);
        return this.removeFromCart(current(), itemId);
      })
    )
  );

  updateCartItem$ = createEffect(() =>
    this.action$.pipe(
      ofType(OrderUIActions.updateCartItem),
      map(({ itemId, quantity }) => {
        let order = this.store.selectSignal(currentOrder);
        return this.updateCartItem(order()!, itemId, quantity);
      })
    )
  );

  private initCartIfItEmpty(item: any) {
    let order: Order = {
      orderId: `#${Date.now()}${Math.floor(Math.random())}`,
      items: [item],
      total: item.totalPrice,
      totalAfterDiscount: item.totalPrice,
      channel: 'delivery',
    };
    return OrderUIActions.initCart({ order });
  }

  private addToCart(current: Order | null, item: Item) {
    let order: Order = {
      orderId: current?.orderId!,
      items: sortBy([...current?.items!, item]!, (i) => i.name),
      total: (current?.total! + item.totalPrice)!,
      totalAfterDiscount: current?.totalAfterDiscount! + item.totalPrice,
      channel: current?.channel!,
    };
    return OrderUIActions.updateCart({ order });
  }

  private removeFromCart(current: Order | null, itemId: number) {
    let removed = current?.items!.filter((i) => i.id === itemId)[0]!;
    let items = current?.items!.filter((item) => item.id !== itemId);

    let order: Order = {
      ...current!,
      items: items!,
      total: current?.total! - removed!.totalPrice,
      totalAfterDiscount: current?.totalAfterDiscount! - removed!.totalPrice!,
    };

    return OrderUIActions.updateCart({ order });
  }

  private updateCartItem(order: Order, itemId: number, itemQuantity: number) {
    let currentItem = this.store.selectSignal(getItem(itemId));
    let updatedItem: Item = {
      ...currentItem()!,
      quantity: itemQuantity,
      totalPrice: itemQuantity * currentItem()!.unitPrice,
    };

    let updatedOrderItems = sortBy(
      [...order.items.filter((i) => i.id !== currentItem()!.id), updatedItem],
      (i) => i.name
    );

    let updatedOrder: Order = {
      ...order,
      items: updatedOrderItems,
      total: updatedOrderItems.map((i) => i.totalPrice).reduce((p, c) => p + c),

      totalAfterDiscount: updatedOrderItems
        .map((i) => i.totalPrice)
        .reduce((p, c) => p + c),
    };

    return OrderUIActions.updateCart({ order: updatedOrder });
  }
}
