import * as types from './types'


let initialState = {
    profile: null as types.ProfileType | null,
    posts: [
        { id: 1, message: "Hi", like: 2 },
        { id: 2, message: "How are you", like: 34 },
        { id: 3, message: "Have smt to write ", like: 56 },
        { id: 4, message: "No a did not", like: 555 },
        { id: 5, message: "My post", like: 5657 },
        { id: 6, message: "One time", like: 554 },
    ] as Array<types.PostsType>,
    status: '' as string,
    isError: false as boolean

}
type InitialStateType = typeof initialState

export let reducer = (state = initialState, action: types.ProfileActions) => {

    switch (action.type) {
        case types.ADD_POST:
            let newPost = {
                id: +state.posts.length + 1,
                message: action.payload,
                like: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case types.SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case types.SET_USER_STATUS:
            return {
                ...state,
                status:
                    action.payload
            }
        case types.SET_EDIT_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}
