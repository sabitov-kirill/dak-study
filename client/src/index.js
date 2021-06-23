import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import Controller from './model/controller/controller'

export const controller = new Controller();
export const Context = React.createContext(Controller);

ReactDOM.render(
  <Context.Provider value={controller}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);