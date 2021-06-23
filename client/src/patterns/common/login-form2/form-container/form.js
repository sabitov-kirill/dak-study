import React, { Component, useContext, useState, Fragment } from 'react';

import { Context } from "./../../../../index"
import FormInput from "./input"

function SignIn(props) {
    return (
        <Fragment>
            <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="Enter email"
                setValue={props.setEmail}
                value={props.email}
                setError={props.setError}
            />
            <FormInput
                label="Password"
                type="password"
                name="password"
                placeholder="Enter password"
                setValue={props.setPassword}
                value={props.password}
                setError={props.setError}
            />
        </Fragment>
    );
}

function SignUp(props) {
    return (
        <Fragment>
            <FormInput
                label="Name"
                type="text"
                name="Name"
                placeholder="Enter Name"
            />
            <FormInput
                label="Last Name"
                type="text"
                name="Last Name"
                placeholder="Enter Last Name"
            />
            <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="Enter email"
            />
            <FormInput
                label="Password"
                type="password"
                name="password"
                placeholder="Enter password"
            />
        </Fragment>
    );
}

export default function Form(props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [loginStatus, setLogStatus] = useState();
    const session = useContext(Context);



    return (
        <form onSubmit={props.submitted}>
            <div>
                <h1 className="text-center">{props.form}</h1>
            </div>
            <hr />
            {props.form === "Sign in"
                ? <SignIn
                    setEmail={setEmail}
                    email={email}
                    setError={setError}
                    setPassword={setPassword}
                    password={password}
                />
                : <SignUp

                />
            }
            <div className="form-group">
                <button type="submit" className="btn btn-danger form-control">
                    {props.form}
                </button>
            </div>

            <div className="forgotPassword">Forgot Password?</div>
        </form>
    );
}
