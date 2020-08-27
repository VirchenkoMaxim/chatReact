
export const UNFOLLOW = 'users/UNFOLLOW'
export const FOLLOW = 'users/FOLLOW'
export const SET_USERS = 'users/SET_USERS'
export const CURENT_PAGE = 'users/CURENT_PAGE'
export const TOTAL_COUNT = 'users/TOTAL_COUNT'
export const TOGGLE_IS_FETCING = 'users/TOGGLE_IS_FETCING'
export const TOGGLE_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_FOLLOWING_IN_PROGRESS'

// users data and api types
type PhotosType = {
    small: string | null,
    large: string | null,
}
export interface UsersType {
    name: String | null,
    id: string | number | undefined,
    uniqueUrlName: String | null,
    photos: PhotosType,
    status: String | null,
    followed: boolean
}
export interface usersDataType {
    error: string | null,
    items: Array<UsersType>,
    totalCount: number
}
export type followUnfollowType = {
    resultCode: number
    message: Array<string>
    data: {}
}


// actions types
export interface acceptFollowInterface {
    type: typeof FOLLOW,
    payload: string | number | undefined
}
export interface acceptUnfollowInterface {
    type: typeof UNFOLLOW,
    payload: string | number | undefined
}
export interface setUsersInterface {
    type: typeof SET_USERS,
    payload: Array<UsersType>
}
export interface setCurrentPageInterface {
    type: typeof CURENT_PAGE,
    payload: number
}
export interface totalCountInterface {
    type: typeof TOTAL_COUNT,
    payload: number
}
export interface toogleIsFetchingInterface {
    type: typeof TOGGLE_IS_FETCING,
    payload: Boolean
}
export type followingInProgressType = {
    isFetching: Boolean,
    userId: number | string | undefined
}
export interface toogleFollowingInProgressInterface {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS,
    payload: followingInProgressType
}
export type usersActionsType = acceptFollowInterface | acceptUnfollowInterface | setUsersInterface | setCurrentPageInterface
    | totalCountInterface | toogleIsFetchingInterface | toogleFollowingInProgressInterface
