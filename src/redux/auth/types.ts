export const SET_USER_DATA = 'auth/SET_USER_DATA'

//auth api types
export type authMeType = {
    resultCode: number,
    message: Array<string>,
    data: {
        id: string | undefined,
        email: string | null,
        login: string | null,
        remeberMe: boolean
    }
}
export type LoginLogoutType = {
    resultCode: number,
    messages: Array<string>,
    data: {
        userId?: string | undefined
    }
}

// actions types
export type setUserDataType = {
    type: typeof SET_USER_DATA,
    payload: {
        userId: string | undefined
        login: string | null
        email: string | null
        isAuth?: boolean
    }
}
export type AuthActionsTypes = setUserDataType
