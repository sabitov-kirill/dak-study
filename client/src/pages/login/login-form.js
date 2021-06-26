import React, { Component, Fragment } from "react";

import "./logins.scss";
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

    render() {
        return (
            <div className="allElements">
                <Fragment >
                    <FormContainer
                        {...this.state}
                    />
                    <SelectionContainer
                        signUpClicked={this.signUpClickHandler}
                        signInClicked={this.signInClickHandler}
                    />
                </Fragment>
            </div>
        );
    }
}

