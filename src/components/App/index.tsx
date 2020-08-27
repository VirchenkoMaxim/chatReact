import React, { useEffect, FC } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import 'react-router-dom';
import '../../styles/App.css';
import Footer from '../Footer';

import Profile from '../Profile';
import Header from '../Header';
import Login from '../Login';
import Preloader from '../common/Preloader';
import { useSelector, useDispatch } from 'react-redux';
import { SuspensedComponent } from '../../hok/SuspensedComponent';
import { Grid } from '@material-ui/core';
import { appSelectors, appActions } from '../../redux/app';
import { RootState } from '../../redux';
import Nav from '../Nav';
const Users = React.lazy(() => import('../Users'));
const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));

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


