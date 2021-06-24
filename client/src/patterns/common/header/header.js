import { Context } from '../../../index.js';
import { useContext } from 'react';
import LoginControl from './login/login-control';
import React from 'react';

function LogoSpace(props) {
    return (
        <div className="headerClass">
            <div className="imageLogo"></div>
            <span className="Zagolovok">DAK-Study</span>
        </div>
    );
}

function DivSpace(props) {
    let session = useContext(Context);


    return (
        <div className="headLogo">
            <LogoSpace />
            <LoginControl className="loginForm" isLoggedIn={session.isLoggedIn} />
        </div>
    );
}

export default function Header(props) {
    return (
        <DivSpace />
    );
}
