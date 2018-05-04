import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList, usersAddEdit, usersDelete } from "./users";
import { setSelectedClass } from "./classes";
import { setPerformanceData } from "./performance";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeLatest, 'USERS_ADD_EDIT', usersAddEdit),
    fork(takeLatest, 'USERS_DELETE', usersDelete),
    fork(takeLatest, 'SET_SELECTED_CLASS', setSelectedClass),
    fork(takeLatest, 'SET_PERFORMANCE_DATA', setPerformanceData),
  ];
}
