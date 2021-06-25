import React, { Component } from 'react';
import { useParams } from 'react-router';
import Footer from '../../patterns/common/footer/footer';
import Header from '../../patterns/common/header/header';
import Body from "./body"
// import ScrollToTopOnMount from "./../../patterns/common/scroll-top.js"

class ThemePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {/* <ScrollToTopOnMount /> */}
                <Body />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default ThemePage;
