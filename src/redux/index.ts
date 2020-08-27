import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { dialogReducer } from "./dialog";
import { usersReducer } from "./users"
import { authReducer } from "./auth";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import { profileReducer } from "./profile";
import { appReducer } from "./app";
let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export type RootState = ReturnType<typeof rootReducer>

export default store  
