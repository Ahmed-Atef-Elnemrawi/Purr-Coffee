import { HistoryAPIActions } from "./action-api";
import { historyFeature } from "./history.feature";
import { HistoryEffects } from "./history.effects";


export {HistoryAPIActions, historyFeature, HistoryEffects}

export const {
  name,
  selectHistoryState,
  selectHistory,
  selectError
} = historyFeature
