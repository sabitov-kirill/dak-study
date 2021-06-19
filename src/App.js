import React, { Component } from 'react';
import './App.css';
// import PageHeader from './patterns/common/header/header.js'
import PageFooter from './patterns/common/footer/footer.js'

import MainPage from './pages/main/main'

class App extends Component {

  switchPage(page) {
    alert(page);
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <MainPage switchPage={this.switchPage} />
      </div>
=======
      <PageFooter />
>>>>>>> eb664b331010b2d40278ec2e2659b74c75549351
    );
  }
}

export default App;
