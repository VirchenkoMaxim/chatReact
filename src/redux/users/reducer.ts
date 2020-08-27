import * as types from './types'

export interface stateType {
    users: Array<types.UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: Boolean,
    followingInProgress: Array<Number | string | undefined>
}
let initialState: stateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

export const reducer = (state: stateType = initialState, action: types.usersActionsType): stateType => {
    switch (action.type) {
        case types.FOLLOW:
            return {
                ...state,
                users: state.users.map((user: types.UsersType) => {
                    if (user.id === action.payload) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case types.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user: types.UsersType) => {
                    if (user.id === action.payload) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case types.SET_USERS:
            return {
                ...state, users: action.payload
            }
        case types.CURENT_PAGE:
            return {
                ...state, currentPage: action.payload
            }
        case types.TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.payload
            }
        case types.TOGGLE_IS_FETCING:
            return {
                ...state, isFetching: action.payload
            }
        case types.TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter((id) => id !== action.payload.userId)
            }
        default:
            return state
    }
}