import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import MainPage from './pages/main/main'
import Profile from './pages/profile/profile'
// import LoginForm from './patterns/common/login-form/login-form';
import LoginForm from './patterns/common/login-form2/login-form'

const routes = [
  { path: '/', Component: MainPage },
  { path: '/login', Component: LoginForm },
]

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} exact>
              <Component />
            </Route>
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
