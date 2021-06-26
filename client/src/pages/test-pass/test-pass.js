import React from 'react';

import './test-pass.scss'

import Header from "../../patterns/common/header/header";
import Footer from "../../patterns/common/footer/footer";
import Body from "./body"

export default function TestPass() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}