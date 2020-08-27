import { UsersType } from './types';
import { RootState } from '..';
import { createSelector } from "reselect";


const getUsersSelector = (state: RootState) =>
    state.users.users
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter((item: UsersType) => true)
})
export const getPageSize = (state: RootState) =>
    state.users.pageSize
export const getTotalUsersCount = (state: RootState) =>
    state.users.totalUsersCount
export const getCurrentPage = (state: RootState) =>
    state.users.currentPage
export const getIsFetching = (state: RootState) =>
    state.users.isFetching
export const getFollowingInProgress = (state: RootState) =>
    state.users.followingInProgress
