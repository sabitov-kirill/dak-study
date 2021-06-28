import React, { Component } from 'react';
import { useParams } from 'react-router';

import Footer from '../../patterns/common/footer/footer';
import Header from '../../patterns/common/header/header';
import Body from "./body"

function ThemePage(props) {
    const { theme } = useParams();
    const flex = ["mechanics", "optics", "magnetism", "molecular", "electrodynamics"];
    const yes_is_page_exists_alert_asd_zxc = flex.indexOf(theme) !== -1;

    // return (
    // <div>
    //     <Body />
    //     <Header />
    //     <Footer />
    // </div>
    // );

    return (
        yes_is_page_exists_alert_asd_zxc
            ? (<div>
                <Body />
                <Header />
                <div className="Footer-profile">
                    <Footer />
                </div>
            </div>)
            : <h1>Error 404. Page not found.</h1>
    );
}

export default ThemePage;