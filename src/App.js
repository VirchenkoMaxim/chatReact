import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { SuspensedComponent } from './hok/SuspensedComponent';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app">
        <HeaderContainer />
        <Nav />
        <div className="main">
          <Switch >
            <Route path='/dialogs' render={() =>
              SuspensedComponent(DialogsContainer)} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() =>
              SuspensedComponent(UsersContainer)} />
            <Route path='/login' render={() => <Login />} />
            <Route path='/' render={() => <div>This Page  was builded by Max Virchenko</div>} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  // autorized: state.auth.isAuth
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),

)(App)


