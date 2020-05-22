import { createStore, combineReducers, applyMiddleware } from "redux";
import profilePageReducer from "./profile-reducer";
import dialogPageReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store  