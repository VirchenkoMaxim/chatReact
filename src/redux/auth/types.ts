export const SET_USER_DATA = "auth/SET_USER_DATA";
export const SET_USER_DATA_LOADING = "auth/SET_USER_DATA_LOADING";
export const SET_USER_DATA_SUCCESS = "auth/SET_USER_DATA_SUCCESS";
export const SET_USER_DATA_FAILED = "auth/SET_USER_DATA_FAILED";

//auth api types
export type authMeType = {
  resultCode: number;
  message: Array<string>;
  data: {
    id: string | undefined;
    email: string | null;
    login: string | null;
    remeberMe: boolean;
  };
};
export type LoginLogoutType = {
  resultCode: number;
  messages: Array<string>;
  data: {
    userId?: string | undefined;
  };
};

// actions types
export type setUserDataType = {
  type: typeof SET_USER_DATA;
  payload: {
    userId: string | undefined;
    login: string | null;
    email: string | null;
    isAuth?: boolean;
  };
};

export type setUserDataLoading = {
  type: typeof SET_USER_DATA_LOADING;
};
export type setUserDataSuccess = {
  type: typeof SET_USER_DATA_SUCCESS;
  payload: {
    userId: string | undefined;
    login: string | null;
    email: string | null;
    isAuth?: boolean;
  };
};
export type setUserDataFailed = {
  type: typeof SET_USER_DATA_FAILED;
  payload: {
    message: string;
  };
};
export type AuthActionsTypes =
  | setUserDataSuccess
  | setUserDataFailed
  | setUserDataLoading;
