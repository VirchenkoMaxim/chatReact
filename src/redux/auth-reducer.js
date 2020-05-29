import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'



let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth }
})

export const getUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setUserData(id, email, login, true))
        }

    })

}
export const login = (email, password, rememberMe) => (dispath) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispath(getUserData())
            }
            else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                dispath(stopSubmit('login', { _error: messages }))
            }
        })
}
export const logout = () => (dispath) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispath(setUserData(null, null, null, false))
            }
        })
}

export default authReducer