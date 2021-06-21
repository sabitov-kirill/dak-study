import React, { Component } from 'react';
import './main.css'

import LoginForm from '../../patterns/common/login-form/login-form'
import PagesMenu from './body/scroll-menu'
import InfoPanel from './body/info'

class MainPage extends Component {
    render() {
        return (
            <div>
                <InfoPanel />
                <PagesMenu switchPage={this.props.switchPage} />
            </div>
        );
    }
}

export default MainPage;