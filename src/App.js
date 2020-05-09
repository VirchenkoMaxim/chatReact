import React, { Component } from 'react';
import 'react-router';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Nav />
          <div className="main">
            <Switch >
              <Route exact path='/dialogs' render={() => <DialogsContainer
                store={this.props.store}
              />} />
              <Route exact path='/profile' render={() => <Profile
                store={this.props.store}
              />}
              />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

