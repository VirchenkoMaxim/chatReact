import { authAPI } from "../../api";
import { RootState } from "..";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as types from "./types";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

export const setUserDataLoading = (): types.AuthActionsTypes => ({
  type: types.SET_USER_DATA_LOADING,
});
export const setUserDataFailed = (payload: any): types.AuthActionsTypes => ({
  type: types.SET_USER_DATA_FAILED,
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

// export const getUserData = () => async (
//   dispatch: Dispatch<types.AuthActionsTypes>
// ) => {
//   let response = await authAPI.me();
//   if (response.resultCode === 0) {
//     let { id, email, login } = response.data;
//     dispatch(setUserData(id, email, login, true));
//   }
// };

export function* login(action: any) {
  yield put(setUserDataLoading());
  try {
    const { email, password, rememberMe } = action.payload;
    const data: any = yield call(authAPI.login, email, password, rememberMe);
    const { userId, login, isAuth } = data;
    yield put(setUserDataSuccess(userId, email, login, isAuth));
  } catch (error) {
    yield put(setUserDataFailed(error.message));
  }
}

// export const login = (
//   email: string,
//   password: string,
//   rememberMe: boolean
// ): ThunkAction<
//   Promise<void>,
//   RootState,
//   unknown,
//   types.AuthActionsTypes
// > => async (dispatch) => {
//   let response = await authAPI.login(email, password, rememberMe);
//   if (response.resultCode === 0) {
//     dispatch(getUserData());
//   }
// };

// export const logout = () => async (
//   dispatch: Dispatch<types.AuthActionsTypes>
// ) => {
//   let response = await authAPI.logout();
//   if (response.resultCode === 0) {
//     dispatch(setUserData(undefined, null, null, false));
//   }
// };
