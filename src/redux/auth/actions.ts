import { authAPI } from '../../api'
import { RootState } from '..';

import * as types from './types'
import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"


export const setUserData = (userId: string | undefined, email: string | null, login: string | null, isAuth: boolean)
    : types.AuthActionsTypes => ({
        type: types.SET_USER_DATA,
        payload: { userId, email, login, isAuth }
    })

export const getUserData = () => async (dispatch: Dispatch<types.AuthActionsTypes>) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let { id, email, login } = response.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean)
    : ThunkAction<Promise<void>, RootState, unknown, types.AuthActionsTypes> => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(getUserData())
        }
    }

export const logout = () => async (dispatch: Dispatch<types.AuthActionsTypes>) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setUserData(undefined, null, null, false))
    }
}

