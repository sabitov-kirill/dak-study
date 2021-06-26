import { Fragment } from 'react'

import Selection from "./selection"

export default function SelectionContainer(props) {
    const left = (
        <p>
            Don't have an account yet?
            <br />
            Sign Up for an account
        </p>

    );
    const right = (
        <p>
            Already have an account?
            <br />
            Sign In to your account
        </p>
    );

    return (
        <Fragment>
            <div className="d-flex py-5">

                <div className="containSelection col-md-8">
                    <div className="fonLogin">
                        <Selection
                            selectionClass="left"
                            header="Sign up"
                            dialog={left}
                            buttonText="Sign Up"
                            id="signUp"
                            clicked={props.signUpClicked}
                        /></div>
                    <div className="fonLogin">
                        <Selection
                            selectionClass="right"
                            header="Sign in"
                            dialog={right}
                            buttonText="Sign in"
                            id="signIn"
                            clicked={props.signInClicked}
                        /></div>

                </div>
            </div>
        </Fragment>
    );
}
