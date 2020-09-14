import {
  takeEvery
} from "redux-saga/effects";
import { all } from "typed-redux-saga";
import {
  authTypes,
  authActions
} from "./auth";

export function* rootSaga() {
  yield all([
    authActions.authWatcher(),
  ]);
}