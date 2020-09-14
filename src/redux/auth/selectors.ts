import { createSelector } from 'reselect';
import { RootState } from '..';


export const getEmail = (state: RootState) =>
    state.auth.email

const login = (state: RootState) =>
    state.auth.login

export const getLogin = createSelector(
    login,
    item => item?.toUpperCase()
)

export const getIsAuth = (state: RootState) =>
    state.auth.isAuth
export const getUserId = (state: RootState) =>
    state.auth.userId
