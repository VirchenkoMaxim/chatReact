import * as types from './types'


let initialState = {
    userId: undefined as string | undefined,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
}
type InitialStateType = typeof initialState
export let reducer = (state: InitialStateType = initialState, action: types.setUserDataType) => {
    switch (action.type) {
        case types.SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}