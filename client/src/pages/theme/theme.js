import React, { Component } from 'react';

import Footer from '../../patterns/common/footer/footer';
import Header from '../../patterns/common/header/header';
import Body from "./body"

class ThemePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Body />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default ThemePage;
