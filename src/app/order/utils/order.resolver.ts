import { ResolveFn } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Order } from '../models';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { currentOrder } from '../data-access/store';

export const orderResolver: ResolveFn<Observable<Observable<Order | null>>> = () => {
  let store = inject(Store);
   let currentOrder$ = store.select(currentOrder)

  return of(currentOrder$);
};
