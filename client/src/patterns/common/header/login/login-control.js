import React, { Component } from 'react';


function LoginButton(props) {
    return (
        <button className="loginForm" onClick={props.onClick}>Login</button>
    );
}

function LoggedButton(props) {
    return (
        <button onClick={props.onClick}>
            {/* <img src="" />*/}
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