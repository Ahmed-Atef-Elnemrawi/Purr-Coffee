import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { HistoryAPIActions, selectHistory} from "../data-access/store";
import { OrderHistory } from "../modals";



export const HistoryResolver:ResolveFn<Observable<OrderHistory[] | null>> = () =>{
  let store = inject(Store);

  store.dispatch(HistoryAPIActions.getHistory());
  let history$ = store.select(selectHistory);
  return of(history$);
}
