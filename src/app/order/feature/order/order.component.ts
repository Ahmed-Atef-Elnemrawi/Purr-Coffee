import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, mergeMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { OrderHeader } from '../../ui/order-header.component';
import { OrderItemCard } from '../../ui/order-item-card.component';
import { OrderFooter } from '../../ui/order-footer.component';
import { Order } from '../../models';
import { OrderOptions } from '../../ui/order-options.component';
import { OrderUIActions } from '../../data-access/store';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    OrderHeader,
    OrderOptions,
    OrderItemCard,
    OrderFooter,
  ],
  templateUrl: './order.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit {
  order$!: Observable<Order | null>;
  #OrderChannel!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store  ) {}

  ngOnInit(): void {
    this.order$ = this.route.data.pipe(
      mergeMap((data) => data['order'] as Observable<Order | null>)
    );
  }

  onOptionChanged(option: string) {
    this.#OrderChannel = option;
  }

  onQuantityChanged(itemId: number, quantity: number) {
    this.store.dispatch(OrderUIActions.updateCartItem({ itemId, quantity }));
  }

  onItemDeleted(itemId: number) {
    this.store.dispatch(OrderUIActions.removeFromCart({ itemId }));
  }
}
