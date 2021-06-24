import React, { Component } from 'react';

import Header from "../../patterns/common/header/header";
import Footer from "../../patterns/common/footer/footer";
import Body from "./body/body"

import './profile.css'

class ProfilePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default ProfilePage;