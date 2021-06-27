import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import MainPage from './pages/main/main'
import Profile from './pages/profile/profile'
import Login from './pages/login/login-form'
import ScrollToTop from "./patterns/common/scroll-top"

// IN DEBUG
import TestPass from './pages/test-pass/test-pass'
import TestPage from "./pages/tests/tests"
import ThemePage from "./pages/theme/theme"
import TestCreationPage from './pages/test-creation/create-test';

const routes = [
  { path: '/', Component: MainPage },
  { path: '/login', Component: Login },
  { path: '/profile', Component: Profile },
  { path: '/test-create', Component: TestCreationPage },
  { path: '/:theme', Component: ThemePage },
  { path: '/:theme/tests', Component: TestPage },
  { path: '/:theme/tests/:id', Component: TestPass },
]

function App() {
  return (
    <Router>
      <ScrollToTop />
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

export default App;
