import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { HistoryService } from '../service';
import { HistoryAPIActions } from './action-api';

@Injectable()
export class HistoryEffects {
  constructor(
    private action$: Actions,
    private historyService: HistoryService
  ) {}

  getHistory$ = createEffect(() =>
    this.action$.pipe(
      ofType(HistoryAPIActions.getHistory),
      mergeMap(() =>
        this.historyService.getOrderHistory().pipe(
          map((history) => HistoryAPIActions.getHistorySuccess({ history })),
          catchError((error: HttpErrorResponse) =>
            of(HistoryAPIActions.getHistoryFailure({ error: error.message }))
          )
        )
      )
    )
  );

  createHistory$ = createEffect(() =>
    this.action$.pipe(
      ofType(HistoryAPIActions.createOrderHistory),
      concatMap(({ history }) =>
        this.historyService.createOrderHistory(history).pipe(
          map((history) =>
            HistoryAPIActions.createOrderHistorySuccess({ history })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              HistoryAPIActions.createOrderHistoryFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
