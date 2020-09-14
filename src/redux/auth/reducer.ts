import * as types from "./types";

let initialState = {
  loading: false as boolean,
  userId: undefined as string | undefined,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  errorMessage: null as string | null,
};
type InitialStateType = typeof initialState;
export let reducer = (
  state: InitialStateType = initialState,
  action: types.AuthActionsTypes
) => {
  switch (action.type) {
    case types.USER_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.USER_DATA_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
      };
    case types.SET_USER_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
};
