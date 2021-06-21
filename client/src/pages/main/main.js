import React, { Component } from 'react';
import './main.css';

<<<<<<< HEAD
import LoginForm from '../../patterns/common/login-form/login-form'
import PagesMenu from './body/scroll-menu'
import InfoPanel from './body/info'
=======
import PagesMenu from './body/scroll-menu';
import InfoPanel from './body/info';
import Header from '../../patterns/common/header/header';
import Footer from '../../patterns/common/footer/footer';
>>>>>>> 786259fb72bcf5700e80bef0265a039262168c1e

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <InfoPanel />
                <PagesMenu switchPage={this.props.switchPage} />
                <Footer />
            </div>
        );
    }
}

export default MainPage;