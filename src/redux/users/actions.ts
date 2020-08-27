import * as types from './types'
import { Dispatch } from 'redux'
import { usersAPI } from '../../api/'

export const acceptFollow = (payload: string | number | undefined): types.acceptFollowInterface => ({ type: types.FOLLOW, payload })
export const acceptUnfollow = (payload: string | number | undefined): types.acceptUnfollowInterface => ({ type: types.UNFOLLOW, payload })
export const setUsers = (payload: Array<types.UsersType>): types.setUsersInterface => ({ type: types.SET_USERS, payload })
export const setCurentPage = (payload: number): types.setCurrentPageInterface => ({ type: types.CURENT_PAGE, payload })
export const totalCount = (payload: number): types.totalCountInterface => ({ type: types.TOTAL_COUNT, payload })
export const toggleIsFetching = (payload: boolean): types.toogleIsFetchingInterface => ({ type: types.TOGGLE_IS_FETCING, payload })
export const toggleFollowingInProgress = (payload: types.followingInProgressType): types.toogleFollowingInProgressInterface => ({ type: types.TOGGLE_FOLLOWING_IN_PROGRESS, payload })

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<types.usersActionsType>) => {
    try {
        dispatch(toggleIsFetching(true));
        let usersData: types.usersDataType = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(usersData.items))
        dispatch(totalCount(usersData.totalCount))
    } catch (error) {
        // dispatch(toggleUsersError(error))
    }
}
export const pageChange = (pageNumber: number, pageSize: number) => async (dispatch: Dispatch<types.usersActionsType>) => {
    try {
        dispatch(toggleIsFetching(true));
        dispatch(setCurentPage(pageNumber));
        let usersData: types.usersDataType = await usersAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(usersData.items))
    } catch (error) {
        // dispatch(toggleUsersError(error))
    }
}
export const follow = (userId: string | number | undefined) => async (dispatch: Dispatch<types.usersActionsType>) => {
    dispatch(toggleFollowingInProgress({ isFetching: true, userId }));
    let response = await usersAPI.follow(userId)
    if (response.resultCode === 0) {
        dispatch(acceptFollow(userId))
    }
    dispatch(toggleFollowingInProgress({ isFetching: false, userId }))
}
export const unfollow = (userId: string | number | undefined) => async (dispatch: Dispatch<types.usersActionsType>) => {
    dispatch(toggleFollowingInProgress({ isFetching: true, userId }))
    let response = await usersAPI.unfollow(userId)
    if (response.resultCode === 0) {
        dispatch(acceptUnfollow(userId))
    }
    dispatch(toggleFollowingInProgress({ isFetching: false, userId }))
}