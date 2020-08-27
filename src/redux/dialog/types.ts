
export const ADD_MESSAGE = 'dialog/ADD-MESSAGE'


export type Messages = {
    id: number
    message: string
}
export type Dialogs = {
    id: number
    name: string
}

// actions types
export type AddMessage = {
    type: typeof ADD_MESSAGE
    payload: string
}
export type ActionDialogs = AddMessage