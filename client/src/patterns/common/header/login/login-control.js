import React, { Component } from 'react';
import LoginForm from '../../login-form2/login-form'


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
            button = <LoggedButton onClick={this.handleLoggedInClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return button;
    }
}

export default LoginControl;