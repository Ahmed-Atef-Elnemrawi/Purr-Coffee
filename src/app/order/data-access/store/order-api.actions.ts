import { createActionGroup, props } from "@ngrx/store";
import { Order } from "../../models";


export const OrderAPIActions = createActionGroup({
  source:'Order API',
  events:{
    'get order': props<{ orderId: string }>(),
    'get order success': props<{ order: Order }>(),
    'get order failure': props<{ error: string }>(),
    'create order': props<{ order: Order }>(),
    'create order success': props<{ order: Order }>(),
    'create order failure': props<{ error: string }>(),
  }
})

