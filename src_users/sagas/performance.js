import { put } from "redux-saga/effects";
export function* setPerformanceData(action) {
  console.log(action, 'saga');
  action.callbackSuccess();
}
