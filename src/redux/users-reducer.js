const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const CURENT_PAGE = 'CURENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'
const TOGGLE_IS_FETCING = 'TOGGLE_IS_FETCING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: null,
    curentPage: 1,
    isFetching: true
}

let usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
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
                ...state, curentPage: action.size
            }
        case TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCING:
            return {
                ...state, isFetching: action.count
            }
        default:
            return state
    }
}


export const follow = (id) => ({ type: FOLLOW, id })
export const unfollow = (id) => {
    return { type: UNFOLLOW, id }
}
export const setUsers = (users) => ({ type: SET_USERS, users })
export const curentPage = (size) => ({ type: CURENT_PAGE, size })
export const totalCount = (count) => ({ type: TOTAL_COUNT, count })
export const toogleIsFetching = (count) => ({ type: TOGGLE_IS_FETCING, count })

export default usersPageReducer
