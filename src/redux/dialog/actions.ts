import * as types from './types'

export const addMessage = (payload: string): types.AddMessage => ({ type: types.ADD_MESSAGE, payload })