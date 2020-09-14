import { authAPI } from "../../api";
import { RootState } from "..";
import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "./types";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

export const LoginRequest = (payload: any): types.AuthActionsTypes => ({
  type: types.LOGIN_REQUEST,
  payload
})
export const LogoutRequest = (): types.AuthActionsTypes => ({
  type: types.LOGOUT_REQUEST,
})

export const UserDataLoading = (): types.AuthActionsTypes => ({
  type: types.USER_DATA_LOADING,
});

export const UserDataFailed = (payload: any): types.AuthActionsTypes => ({
  type: types.USER_DATA_FAILED,
  payload,
});
export const setUserDataSuccess = (
  userId: string | undefined,
  email: string | null,
  login: string | null,
  isAuth: boolean
): types.AuthActionsTypes => ({
  type: types.SET_USER_DATA_SUCCESS,
  payload: { userId, email, login, isAuth },
});

export function* getUserDataSaga() {
  yield put(UserDataLoading());
  try {
    const response: types.authMeType = yield authAPI.me();
    if (response.resultCode === 0) {
      const { id, email, login } = response.data;
      yield put(setUserDataSuccess(id, email, login, true));
    } else if (response.resultCode > 0 && response.resultCode <= 10) {
      yield put(UserDataFailed(response.message))
    }
  } catch (error) {
    yield put(UserDataFailed(error.message))
  }
}

export function* login(action: types.LoginRequest) {
  yield put(UserDataLoading());
  try {
    const { email, password, rememberMe } = action.payload;
    const response: types.LoginLogoutType = yield call(authAPI.login, email, password, rememberMe);
    if (response.resultCode == 0) {
      yield call(getUserDataSaga)
    } else if (response.resultCode > 0 && response.resultCode <= 10) {
      yield put(UserDataFailed(response.messages))
    }
  } catch (error) {
    yield put(UserDataFailed(error.message));
  }
}

export function* logout() {
  yield put(UserDataLoading());
  try {
    let response: types.LoginLogoutType = yield authAPI.logout();
    if (response.resultCode === 0) {
      yield put(setUserDataSuccess(undefined, null, null, false))
    } else if (response.resultCode > 0 && response.resultCode <= 10) {
      yield put(UserDataFailed(response.messages))
    }
  } catch (error) {
    yield put(UserDataFailed(error.message));
  }
}

export function* authWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, login);
  yield takeLatest(types.LOGOUT_REQUEST, logout);
}


export const getUserData = ():
  ThunkAction<
    Promise<void>,
    RootState,
    unknown,
    types.AuthActionsTypes
  > => async (
    dispatch: Dispatch<types.AuthActionsTypes>
  ) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setUserDataSuccess(id, email, login, true));
    } else {
      dispatch(UserDataFailed("error"))
    }
  }
