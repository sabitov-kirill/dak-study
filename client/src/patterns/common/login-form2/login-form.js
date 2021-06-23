import React, { Component, Fragment } from "react";

import "./login.css";
import SelectionContainer from "./selection-container/selection-container";
import FormContainer from "./form-container/form-container";

export default class LoginForm extends Component {
    state = {
        userToggle: false
    };

    signUpClickHandler = evt => {
        this.setState({ userToggle: true });
    };

    signInClickHandler = evt => {
        this.setState({ userToggle: false });
    };

    signInSubmitHandler = evt => {
        evt.preventDefault();
        alert("Successful login");
    };

    signUpSubmitHandler = evt => {
        evt.preventDefault();
        alert("Successful registration");
    };

    render() {
        return (
            <Fragment className="loginForm">
                <FormContainer
                    {...this.state}
                    signInSubmit={this.signInSubmitHandler}
                    signUpSubmit={this.signUpSubmitHandler}
                />
                <SelectionContainer
                    signUpClicked={this.signUpClickHandler}
                    signInClicked={this.signInClickHandler}
                />
            </Fragment>
        );
    }
}
