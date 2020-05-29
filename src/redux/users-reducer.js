import { usersAPI } from "../api/api"

const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const CURENT_PAGE = 'CURENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'
const TOGGLE_IS_FETCING = 'TOGGLE_IS_FETCING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

let usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case CURENT_PAGE:
            return {
                ...state, currentPage: action.size
            }
        case TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCING:
            return {
                ...state, isFetching: action.count
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}


export const acceptFollow = (id) => ({ type: FOLLOW, id })
export const acceptUnfollow = (id) => {
    return { type: UNFOLLOW, id }
}
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurentPage = (size) => ({ type: CURENT_PAGE, size })
export const totalCount = (count) => ({ type: TOTAL_COUNT, count })
export const toggleIsFetching = (count) => ({ type: TOGGLE_IS_FETCING, count })
export const toggleFollowingInProgress = (isFetching, id) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id })

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(totalCount(data.totalCount))
        })
}
export const pageChange = (pageNumber, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurentPage(pageNumber));
    usersAPI.getUsers(pageNumber, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
}
export const follow = (itemId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, itemId));
    usersAPI.follow(itemId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(acceptFollow(itemId))
        }
        dispatch(toggleFollowingInProgress(false, itemId))
    })
}
export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    usersAPI.unfollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(acceptUnfollow(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))

    })

}
export default usersPageReducer
