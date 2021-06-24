import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { Context } from '../../../../index'

function LoginLink(props) {
    return (
        <Link to="/login">
            <button className="loginForm">
                Login
            </button>
        </Link>
    );
}

function ProfileLink(props) {
    return (
        <Link to="/profile">
            <button className="logged">
                <div className="userIcon" />
                <p>{props.username}</p>
            </button>
        </Link>
    );
}

function LoginControl() {
    let session = useContext(Context);
    let button;

    if (session.isLoggedIn) {
        button = <ProfileLink username={session.user.name} />
    } else {
        button = <LoginLink />
    }

    return button;
}

export default LoginControl;