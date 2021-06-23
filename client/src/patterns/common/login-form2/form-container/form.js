import React, { Component, useContext, useState, Fragment } from 'react';

import { Context } from "./../../../../index"
import FormInput from "./input"
import WrongInputLabel from './wrong-input-label'

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
                name="name"
                placeholder="Enter Name"
                setValue={props.setName}
                value={props.name}
                setError={props.setError}
            />
            <FormInput
                label="Last Name"
                type="text"
                name="last Name"
                placeholder="Enter Last Name"
                setValue={props.setLastName}
                value={props.lastName}
                setError={props.setError}
            />
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


export default function Form(props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [loginStatus, setLogStatus] = useState();
    const session = useContext(Context);

    // не юзал isError + loginStatus, тк они используются только в классИмя
    // чтобы Сане было удобнее переписать css porahu

    // {isError && <WrongInputLabel text='Wrong email or password.' />} for debug now

    // v next strokah stremnoe der'mo
    // mne len' pisat' otdel'nie funkcii
    // sorre) 

    return (
        <form onSubmit={
            props.form === "Sign in"
                ? async () => {
                    try {
                        await session.signIn(email, password);
                        setLogStatus(session.isLoggedIn);
                    } catch (error) {
                        alert(loginStatus);
                        setError(true);
                    }
                }
                : async () => {
                    try {
                        await session.signUp(email, name, lastName, password);
                        setLogStatus(session.isLoggedIn);
                    } catch (error) {
                        alert(loginStatus);
                        setError(true);
                    }
                }
            }
        >
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
                    setEmail={setEmail}
                    email={email}
                    setError={setError}
                    setPassword={setPassword}
                    password={password}
                    setName={setName}
                    name={name}
                    setLastName={setLastName}
                    lastName={lastName}
                />
            }
            <div className="form-group">
                <button type="submit" className="btn btn-danger form-control">
                    {props.form}
                </button>
            </div>

            <div className="forgotPassword">Forgot Password?</div>
            {isError && <WrongInputLabel text='Wrong email or password.' />}
        </form>
    );
}
