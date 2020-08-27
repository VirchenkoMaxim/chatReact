import * as types from './types'

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yes' },
        { id: 5, message: 'No i am not' },
    ] as Array<types.Messages>,
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'max' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Vetal' },
        { id: 5, name: 'Anton' },
        { id: 6, name: 'Valera' },
    ] as Array<types.Dialogs>,
}
type InitialState = typeof initialState

export let reducer = (state: InitialState = initialState, action: types.ActionDialogs): InitialState => {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.payload }],
            }
        default:
            return state
    }
}