import * as serviceWorker from './serviceWorker';
import store from './redux'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App
                store={store}
            /></BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);


serviceWorker.unregister();