import profilePageReducer from "./profile-reducer";
import dialogPageReduser from "./dialog-reducer";
import sidebarReduser from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi", like: 2 },
                { id: 2, message: "How are you", like: 34 },
                { id: 3, message: "Have smt to write ", like: 56 },
                { id: 4, message: "No a did not", like: 555 },
                { id: 5, message: "My post", like: 5657 },
                { id: 6, message: "One time", like: 554 },
            ],
            newPost: "Hi",
        },
        dialogsPage: {
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
            newMessage: "",
        },
        sidebar: {},
    },
    _callSubscriber() { },

    getState() {
        return store._state
    },
    renderNew(observer) {
        store._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogPageReduser(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReduser(this._state.sidebar, action)
        this._callSubscriber(store._state);
    }
}


// window.state = store;
export default store;


