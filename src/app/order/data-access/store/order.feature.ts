import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Order } from '../../models';
import { OrderAPIActions } from './order-api.actions';
import { OrderUIActions } from './order-ui.actions';

export interface OrderState {
  order: Order | null;
  error: string;
}

export const initialState: OrderState = {
  order: null,
  error: '',
};

export const orderFeature = createFeature({
  name: 'order',
  reducer: createReducer(
    initialState,
    //Order API
    on(OrderAPIActions.getOrder, (state) => ({
      ...state,
    })),

    on(OrderAPIActions.getOrderSuccess, (state, { order }) => ({
      ...state,
      order: order,
    })),

    on(OrderAPIActions.getOrderFailure, (state, { error }) => ({
      ...state,
      error: error,
    })),

    on(OrderAPIActions.createOrder, (state) => ({
      ...state,
    })),

    on(OrderAPIActions.createOrderSuccess, (state, { order }) => ({
      ...state,
      order: order,
    })),

    on(OrderAPIActions.createOrderFailure, (state, { error }) => ({
      ...state,
      error: error,
    })),

    //Order UI
    on(OrderUIActions.initCart, (state, { order }) => ({
      ...state,
      order: order,
    })),

    on(OrderUIActions.addToCart, (state) => ({
      ...state,
    })),

    on(OrderUIActions.removeFromCart, (state) => ({
      ...state,
    })),

    on(OrderUIActions.updateCart, (state, { order }) => ({
      ...state,
      order: order,
    })),

    on(OrderUIActions.updateCartItem, (state) => ({
      ...state,
    }))
  ),

  extraSelectors: ({ selectOrderState: orderState }) => ({
    isAddedToCart: (itemId: number) =>
      createSelector( orderState,({ order }) =>
       order?.items.some((item) => item.id === itemId)!
      ),

    itemsCount: createSelector(orderState, ({ order }) =>
       order?.items.length!),

    getItem: (itemId: number) =>
      createSelector(orderState, ({ order }) =>
        order?.items.find((item) => item.id === itemId)
      ),
  }),
});


