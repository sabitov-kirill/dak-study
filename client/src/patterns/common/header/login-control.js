import React, { Component } from 'react';


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function LoggedButton(props) {
    return (
        <button onClick={props.onClick}>
            <img src="" />
        </button>
    );
}

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLoggedInClick = this.handleLoggedInClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        // here need to call login form..
        this.setState({ isLoggedIn: true });
    }

    handleLoggedInClick() {
        // here need to call profile form or link idk
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LoggedButton onClick={this.handleLoggedInClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return button;
    }
}

export default LoginControl;