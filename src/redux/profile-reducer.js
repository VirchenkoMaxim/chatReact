const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'

let initialState = {
    posts: [
        { id: 1, message: "Hi", like: 2 },
        { id: 2, message: "How are you", like: 34 },
        { id: 3, message: "Have smt to write ", like: 56 },
        { id: 4, message: "No a did not", like: 555 },
        { id: 5, message: "My post", like: 5657 },
        { id: 6, message: "One time", like: 554 },
    ],
    newPost: "Hi",
}

let profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: +state.posts.length + 1,
                message: state.newPost,
                like: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPost: ''
            }
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPost: action.newText
            }
        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const changeNewPostActionCreator = (text) => {
    return { type: CHANGE_NEW_POST, newText: text }
}


export default profilePageReducer