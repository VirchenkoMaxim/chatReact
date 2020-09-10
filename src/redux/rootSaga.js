import { takeEvery } from "redux-saga/effects";
import { authTypes, authActions } from "./auth";

export function* rootSaga() {
  yield takeEvery(authTypes.SET_USER_DATA, authActions.login);
}
