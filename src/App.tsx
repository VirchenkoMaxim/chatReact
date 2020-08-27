import React, { useEffect, FC } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

import Profile from './components/Profile';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader';
import { useSelector, useDispatch } from 'react-redux';
import { SuspensedComponent } from './hok/SuspensedComponent';
import { Grid } from '@material-ui/core';
import { appSelectors, appActions } from './redux/app';
import { RootState } from './redux';
import Nav from './components/Nav/Nav';
const Users = React.lazy(() => import('./components/Users/Users'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

export const App: FC<any> = () => {
  const dispatch = useDispatch();
  const initialized = useSelector((state: RootState) => appSelectors.initializedSuccessed(state))
  useEffect(() => {
    dispatch(appActions.initializeApp())
    return () => {

    }
  }, [])

  if (!initialized) {
    return <Preloader />
  }
  return (
    <div className="app">
      <Header />
      <Nav />
      <main>
        <Switch >
          <Route path='/dialogs' render={() =>
            SuspensedComponent(DialogsContainer)} />
          <Route path='/profile/:userId?' render={() => <Profile />} />
          <Route path='/users' render={() =>
            SuspensedComponent(Users)} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/' render={() => <div>This Page  was builded by Max Virchenko</div>} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}


export default withRouter(App)


