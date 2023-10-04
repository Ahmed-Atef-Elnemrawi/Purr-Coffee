import { createFeature, createReducer, on } from '@ngrx/store';
import { OrderHistory } from '../../modals';
import { HistoryAPIActions } from './action-api';

export interface HistoryState {
  history: OrderHistory[] | null;
  error: string;
}

const initialState: HistoryState = {
  history: null,
  error: '',
};

export const historyFeature = createFeature({
  name: 'history',
  reducer: createReducer(
    initialState,
    on(HistoryAPIActions.getHistory, (state) => ({ ...state })),

    on(HistoryAPIActions.getHistorySuccess, (state, { history }) => ({
      ...state,
      history: history,
    })),

    on(HistoryAPIActions.getHistoryFailure, (state, { error }) => ({
      ...state,
      error: error,
    })),

    on(HistoryAPIActions.createOrderHistory, (state) => ({
      ...state,
    })),

    on(HistoryAPIActions.createOrderHistorySuccess, (state) => ({
      ...state,
    })),

    on(HistoryAPIActions.createOrderHistoryFailure, (state, { error }) => ({
      ...state,
      error: error,
    }))
  ),
});

export const {
  name,
  selectHistoryState,
  selectHistory,
  selectError
} = historyFeature
