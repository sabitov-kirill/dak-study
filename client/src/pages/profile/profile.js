import React, { Component } from 'react';

import Header from "../../patterns/common/header/header";
import Footer from "../../patterns/common/footer/footer";
import Body from "./body/body"

import './profile.scss'

class ProfilePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <Body />
                <div className="header-profile">
                    <Header />
                </div>
                <div className="backDiv2">
                    <div className="footer-profile">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;