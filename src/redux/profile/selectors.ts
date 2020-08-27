import { RootState } from '..';

export const profile = (state: RootState) =>
    state.profile.profile
export const status = (state: RootState) =>
    state.profile.status
export const autorizedUserId = (state: RootState) =>
    state.auth.userId
export const isAuth = (state: RootState) =>
    state.auth.isAuth
export const isError = (state: RootState) =>
    state.profile.isError
export const posts = (state: RootState) =>
    state.profile.posts

