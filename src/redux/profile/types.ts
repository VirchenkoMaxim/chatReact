export const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE'
export const ADD_POST = 'profile/ADD-POST'
export const SET_USER_STATUS = 'profile/SET_USER_STATUS'
export const SET_EDIT_ERROR = 'profile/SET_EDIT_ERROR'

export type ProfileType = {
    userId: string | undefined
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type PostsType = {
    id: number
    message: string
    like: number
}

// actions types 
export type AddPost = {
    type: typeof ADD_POST
    payload: string
}
export type SetUsersProfile = {
    type: typeof SET_USERS_PROFILE
    payload: ProfileType
}
export type SetUsersStatus = {
    type: typeof SET_USER_STATUS
    payload: string
}
export type SetEditError = {
    type: typeof SET_EDIT_ERROR
    payload: boolean
}
export type ProfileActions = AddPost | SetUsersProfile | SetUsersStatus | SetEditError

