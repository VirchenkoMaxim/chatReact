import { getUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const initializedSuccessed = () => ({ type: INITIALIZED_SUCCESS })
export const initializeApp = () => (dispatch) => {
    Promise.all([
        dispatch(getUserData())
    ]).then(() => {
        dispatch(initializedSuccessed())
    });
}


export default appReducer