import { createFeature, createReducer, on } from '@ngrx/store';
import { Coffee } from '../../models/coffee';
import { CoffeeAPIActions } from './coffee-api.actions';

export interface CoffeesState {
  coffees: Coffee[];
  coffee: Coffee | null;
  error: string;
}

const initialState: CoffeesState = {
  coffees: [],
  coffee: null,
  error: '',
};

export const coffeesFeature = createFeature({
  name: 'coffee',
  reducer: createReducer(
    initialState,
    on(CoffeeAPIActions.getCoffees, (state) => ({
      ...state,
      error: '',
    })),

    on(CoffeeAPIActions.getCoffeesSuccess, (state, { coffees }) => ({
      ...state,
      coffees: coffees,
      error: '',
    })),

    on(CoffeeAPIActions.getCoffeeFailure, (state, { error }) => ({
      ...state,
      error: error,
    })),

    on(CoffeeAPIActions.getCoffee, (state) => ({
      ...state,
      error: '',
    })),

    on(CoffeeAPIActions.getCoffeeSuccess, (state, { coffee }) => ({
      ...state,
      coffee: coffee,
      error: '',
    })),

    on(CoffeeAPIActions.getCoffeesFailure, (state, { error }) => ({
      ...state,
      error: error,
    })))
});

export const {
  name,
  reducer,
  selectCoffeeState,
  selectCoffees: currentCoffees,
  selectCoffee: currentCoffee,
  selectError: currentError,
} = coffeesFeature;
