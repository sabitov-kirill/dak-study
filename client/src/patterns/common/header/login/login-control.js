import React, { Component } from 'react';
import { Link } from "react-router-dom";


function LoginButton(props) {
    return (
        <button className="loginForm" onClick={props.onClick}>Login</button>

    );
}

function LoggedButton(props) {
    return (
        <button className="logged" onClick={props.onClick}>
            <p>name</p>
        </button>
    );
}


class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLoggedInClick = this.handleLoggedInClick.bind(this);
    }

    handleLoginClick() {
        // here need to call login form..
    }

    handleLoggedInClick() {
        // here need to call profile form or link idk
    }
    render() {
        let button;

        if (this.props.isLoggedIn) {
            button = <Link to="profile"><LoggedButton onClick={this.handleLoggedInClick} /></Link>
        } else {
            button = <Link to="/login"><LoginButton onClick={this.handleLoginClick} /></Link>
        }
        return button;
    }
}

export default LoginControl;