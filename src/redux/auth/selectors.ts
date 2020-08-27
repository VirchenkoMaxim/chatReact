import { RootState } from '..';


export const getEmail = (state: RootState) =>
    state.auth.email
export const getLogin = (state: RootState) =>
    state.auth.login
export const getIsAuth = (state: RootState) =>
    state.auth.isAuth
export const getUserId = (state: RootState) =>
    state.auth.userId
