export const LOGIN_REQUEST = "auth/LOGIN_REQUEST";
export const LOGOUT_REQUEST = "auth/LOGOUT_REQUEST";
export const USER_DATA_LOADING = "auth/USER_DATA_LOADING";
export const SET_USER_DATA_SUCCESS = "auth/SET_USER_DATA_SUCCESS";
export const USER_DATA_FAILED = "auth/USER_DATA_FAILED";



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

// actions 
export type loginData = {
  email: string | null
  password: string | null
  rememberMe?: boolean
}


export type LoginRequest = {
  type: typeof LOGIN_REQUEST
  payload: loginData
}
export type LogoutRequest = {
  type: typeof LOGOUT_REQUEST
}

export type UserDataLoading = {
  type: typeof USER_DATA_LOADING,
  payload?: boolean
};
export type SetUserDataSuccess = {
  type: typeof SET_USER_DATA_SUCCESS;
  payload: {
    userId: string | undefined;
    login: string | null;
    email: string | null;
    isAuth?: boolean;
  };
};
export type UserDataFailed = {
  type: typeof USER_DATA_FAILED;
  payload: {
    message: string;
  };
};
export type AuthActionsTypes =
  | SetUserDataSuccess
  | UserDataFailed
  | UserDataLoading
  | LoginRequest
  | LogoutRequest
