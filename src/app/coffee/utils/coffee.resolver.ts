import { ResolveFn } from '@angular/router';
import { Coffee } from '../models/coffee';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { currentCoffees } from '../data-access/store/coffee.feature';
import { CoffeeAPIActions } from '../data-access/store/coffee-api.actions';
import { Observable, of } from 'rxjs';

type resolveType = Observable<Observable<Coffee[] | null>>;

export const coffeeResolver: ResolveFn<resolveType> = () => {
  let store = inject(Store);

  store.dispatch(CoffeeAPIActions.getCoffees());
  let coffee = store.select(currentCoffees);

  return of(coffee);
};
