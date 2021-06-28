import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import MainPage from './pages/main/main'
import ProfilePage from './pages/profile/profile'
import LoginPage from './pages/login/login-form'
import TestPassPage from './pages/test-pass/test-pass'
import TestPage from "./pages/tests/tests"
import ThemePage from "./pages/theme/theme"
import TestCreationPage from './pages/test-creation/create-test';

import ScrollToTop from "./patterns/common/scroll-top"

const routes = [
  { path: '/', Component: MainPage },
  { path: '/login', Component: LoginPage },
  { path: '/profile', Component: ProfilePage },
  { path: '/:theme', Component: ThemePage },
  { path: '/:theme/tests', Component: TestPage },
  { path: '/:theme/tests/create', Component: TestCreationPage },
  { path: '/:theme/tests/:id', Component: TestPassPage },
]

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} exact>
              <Component />
            </Route>
          ))}
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
