import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { OrderHistory } from "../../modals";

export const HistoryAPIActions = createActionGroup({
  source:'History API',
  events:{
    'get history': emptyProps(),
    'get history success': props<{history: OrderHistory[]}>(),
    'get history failure': props<{error: string}>(),

    'create order history': props<{history: OrderHistory}>(),
    'create order history success': props<{history: OrderHistory}>(),
    'create order history failure': props<{error: string}>()
  }
})
