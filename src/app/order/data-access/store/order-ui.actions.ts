import { createActionGroup, props } from "@ngrx/store";
import { Item, Order } from "../../models";

export const OrderUIActions = createActionGroup({
  source:'Order UI',
  events: {
    'init cart': props<{ order: Order }>(),
    'add to cart': props<{ item: Item }>(),
    'remove from cart': props<{itemId: number}>(),
    'update cart': props<{ order: Order }>(),
    'update cart item': props<{itemId:number, quantity: number}>(),
  },
})
