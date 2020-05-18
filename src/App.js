import React, { Component } from 'react';
import 'react-router';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <HeaderContainer />
          <Nav />
          <div className="main">
            <Switch >
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

