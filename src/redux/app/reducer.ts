import * as types from './types'

let initialState = {
    initialized: false as boolean
}
export type InitialState = typeof initialState

export let reducer = (state: InitialState = initialState, action: types.AppActions) => {
    switch (action.type) {
        case types.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}