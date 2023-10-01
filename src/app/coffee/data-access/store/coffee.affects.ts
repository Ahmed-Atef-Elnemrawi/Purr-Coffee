import { Injectable } from '@angular/core';
import { CoffeeService } from '../service/coffee.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoffeeAPIActions } from './coffee-api.actions';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderUIActions } from 'src/app/order/data-access/store/order-ui.actions';

@Injectable()
export class CoffeeEffects {
  constructor(private coffeeService: CoffeeService, private action$: Actions) {}

  getCoffees$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoffeeAPIActions.getCoffees),
      mergeMap(() =>
        this.coffeeService.getCoffeeList().pipe(
          map((coffees) => {
            return CoffeeAPIActions.getCoffeesSuccess({ coffees });
          }),
          catchError((err: HttpErrorResponse) =>
            of(CoffeeAPIActions.getCoffeesFailure({ error: err.message }))
          )
        )
      )
    )
  );

  getCoffee$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoffeeAPIActions.getCoffee),
      concatMap((action) =>
        this.coffeeService.getCoffee(action.coffeeId).pipe(
          map((coffee) => CoffeeAPIActions.getCoffeeSuccess({ coffee })),
          catchError((err: HttpErrorResponse) =>
            of(CoffeeAPIActions.getCoffeeFailure({ error: err.message }))
          )
        )
      )
    )
  );
}
