import React, { Component } from 'react';
import './App.css';

import MainPage from './pages/main/main'

class App extends Component {

  switchPage(page) {
    alert(page);
  }

  render() {
    return (
      <div>
        <MainPage switchPage={this.switchPage} />
      </div>
    );
  }
}

export default App;
