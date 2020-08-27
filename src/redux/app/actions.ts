import { RootState } from '..';
import * as types from './types'
import { authActions } from '../auth';
import { ThunkAction } from 'redux-thunk';


const initializedSuccessed = (): types.InitializedSuccessed => ({ type: types.INITIALIZED_SUCCESS })

export const initializeApp = ()
    : ThunkAction<Promise<void>, RootState, unknown, types.AppActions> => async (dispatch) => {
        Promise.all([
            dispatch(authActions.getUserData())
        ]).then(() => {
            dispatch(initializedSuccessed())
        });
    }