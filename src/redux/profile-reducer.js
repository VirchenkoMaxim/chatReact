import { usersAPI, profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_EDIT_ERROR = 'SET_EDIT_ERROR'
let initialState = {
    profile: null,
    posts: [
        { id: 1, message: "Hi", like: 2 },
        { id: 2, message: "How are you", like: 34 },
        { id: 3, message: "Have smt to write ", like: 56 },
        { id: 4, message: "No a did not", like: 555 },
        { id: 5, message: "My post", like: 5657 },
        { id: 6, message: "One time", like: 554 },
    ],
    status: '',
    isError: false

}

let profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: +state.posts.length + 1,
                message: action.payload,
                like: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profilePost
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status:
                    action.status
            }
        case SET_EDIT_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}


export const addPost = (payload) => ({ type: ADD_POST, payload })
export const setUsersProfile = (profilePost) => ({ type: SET_USERS_PROFILE, profilePost })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setEditError = (payload) => ({ type: SET_EDIT_ERROR, payload })


export const getProfileUser = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data))
    })
}
export const getProfileData = (data) => (dispatch, getState) => {
    const userId = getState().auth.userId
    profileAPI.setProfileData(data).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getProfileUser(userId))
            dispatch(setEditError(false))
        } else {
            let text = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
            // for (let text of response.data.messages) {
            let textErr = text.toLowerCase().substring(text.indexOf('>') + 1, text.length - 1);
            // }
            dispatch(stopSubmit('profileInfo', { "contacts": { [textErr]: text } }))
            dispatch(setEditError(true))
        }
    })
}
export const getProfileStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}
export const updateProfileStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
            dispatch(setUserStatus(status))
    })
}
export const savePhoto = (file) => (dispatch, getState) => {
    const userId = getState().auth.userId
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0)
                dispatch(getProfileUser(userId))
        })
}

export default profilePageReducer
