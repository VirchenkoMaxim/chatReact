const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'


let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yes' },
        { id: 5, message: 'No i am not' },
    ],
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'max' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Vetal' },
        { id: 5, name: 'Anton' },
        { id: 6, name: 'Valera' },
    ],
    newMessage: "sdg"
}
let copyState;
let dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: +state.messages.length + 1,
                message: state.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessage: ''

            }
        // copyState.newMessage = ""

        case CHANGE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.newText
            }
        default:
            return state
    }
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeNewMessageActionCreator = (text) => {
    return { type: CHANGE_NEW_MESSAGE, newText: text }
}

export default dialogPageReducer
