import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import Session from './model/session/session'

export const session = new Session();
export const Context = React.createContext(session);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);