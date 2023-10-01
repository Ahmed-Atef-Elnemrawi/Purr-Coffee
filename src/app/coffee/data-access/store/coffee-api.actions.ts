import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Coffee } from 'src/app/coffee/models/coffee';

export const CoffeeAPIActions = createActionGroup({
  source: 'Coffee API',
  events: {
    'get coffees': emptyProps(),
    'get coffees success': props<{ coffees: Coffee[] }>(),
    'get coffees failure': props<{ error: string }>(),
    'get coffee': props<{ coffeeId: number }>(),
    'get coffee success': props<{ coffee: Coffee }>(),
    'get coffee failure': props<{ error: string }>(),
  },
});

export const {
  getCoffees,
  getCoffeesSuccess,
  getCoffeesFailure,
  getCoffee,
  getCoffeeSuccess,
  getCoffeeFailure,
} = CoffeeAPIActions;
