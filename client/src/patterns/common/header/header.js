import { Link } from "react-router-dom";
import React from 'react';

import LoginControl from './login/login-control';

function LogoSpace(props) {
    return (
        <div className="headerClass">
            <div className="imageLogo"></div>
            <span className="Zagolovok">DAK-Study</span>
        </div>
    );
}

export default function Header(props) {
    return (
        <div className="headLogo">
            <Link to="/"><LogoSpace /></Link>
            <LoginControl className="loginForm" />
        </div>
    );
}
