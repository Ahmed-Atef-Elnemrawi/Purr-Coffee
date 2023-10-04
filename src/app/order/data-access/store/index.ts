import { OrderAPIActions } from './order-api.actions';
import { OrderUIActions } from './order-ui.actions';
import { OrderEffects } from './order.effects';
import { orderFeature } from './order.feature';
import { OrderState } from './order.feature';

export { OrderAPIActions, OrderUIActions, OrderEffects, OrderState };

export const {
  name,
  selectOrderState: currentOrderState,
  selectOrder: currentOrder,
  selectError: currentError,
  isAddedToCart,
  itemsCount,
  getItem,
} = orderFeature;
