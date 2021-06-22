import React, { Component } from 'react';
import './main.css';

import PagesMenu from './body/scroll-menu';
import InfoPanel from './body/info';
import Header from '../../patterns/common/header/header';
import Footer from '../../patterns/common/footer/footer';

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