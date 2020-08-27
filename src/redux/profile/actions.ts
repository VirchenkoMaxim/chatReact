import { Dispatch } from 'redux';
import { RootState } from '..';
import * as types from './types'
import { profileAPI } from '../../api';
import { ThunkAction } from 'redux-thunk';


export const addPost = (payload: string): types.AddPost => ({ type: types.ADD_POST, payload })
export const setUserProfile = (payload: types.ProfileType): types.SetUsersProfile => ({ type: types.SET_USERS_PROFILE, payload })
export const setUserStatus = (payload: string): types.SetUsersStatus => ({ type: types.SET_USER_STATUS, payload })
export const setEditError = (payload: boolean): types.SetEditError => ({ type: types.SET_EDIT_ERROR, payload })


export const getProfileUser = (userId: string | undefined) => async (dispatch: Dispatch<types.ProfileActions>) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const setProfileData = (profileData: types.ProfileType)
    : ThunkAction<Promise<void>, RootState, unknown, types.ProfileActions> => async (dispatch, getState) => {
        const userId = getState().auth.userId
        let data = await profileAPI.setProfileData(profileData)
        if (data.resultCode === 0) {
            dispatch(getProfileUser(userId))
            dispatch(setEditError(false))
        } else {
            dispatch(setEditError(true))
        }
    }
export const getProfileStatus = (userId: string | undefined) => (dispatch: Dispatch<types.ProfileActions>) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}
export const updateProfileStatus = (status: string) => (dispatch: Dispatch<types.ProfileActions>) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0)
            dispatch(setUserStatus(status))
    })
}
export const savePhoto = (file: string)
    : ThunkAction<Promise<void>, RootState, unknown, types.ProfileActions> => async (dispatch, getState) => {
        const userId = getState().auth.userId
        let data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0)
            dispatch(getProfileUser(userId))
    }
