import React, { Component } from 'react';

import Header from "./../../patterns/common/header/header"
import Footer from "./../../patterns/common/footer/footer"
import Body from "./body"

function TestPage() {
    return (
        <div>
            <Body />
            <Header />
            <Footer />
        </div>
    );
}

export default TestPage;
