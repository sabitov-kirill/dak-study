import React, { useContext, useState, Fragment } from 'react';
import { Redirect } from 'react-router';

import { Context } from "../../../index"
import FormInput from "./input"
import WrongInputLabel from '../../../patterns/common/wrong-input-label'

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
                shouldMakeLowercase={true}
            />
            <FormInput
                label="Password"
                type="password"
                name="password"
                placeholder="Enter password"
                setValue={props.setPassword}
                value={props.password}
                setError={props.setError}
                shouldMakeLowercase={false}
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
                shouldMakeLowercase={true}
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
            <input
                type='radio'
                value={'student'}
                name='status'
                onChange={(e) => props.setStatus(e.target.value)}
                required
            /><label className='statusSelector'>Student</label>
            <input
                type='radio'
                value={'teacher'}
                name='status'
                onChange={(e) => props.setStatus(e.target.value)}
                required
            /><label className='statusSelector'>Teacher</label>
        </Fragment>
    );
}


export default function Form(props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [isSuccsess, setIsSuccsess] = useState(false);
    const [isError, setError] = useState(false);
    const session = useContext(Context);

    const superFlexFunctionByFlex = async () => {
        try {
            if (props.form === "Sign in") {
                await session.signIn(email, password)
            } else {
                await session.signUp(email, name, lastName, password, status);
            }

            setIsSuccsess(true);
        } catch (e) {
            setError(true);
        }
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            superFlexFunctionByFlex();
        }}
        >
            <div>
                <h1 className="Zag">{props.form}</h1>
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
                    setLastName={setLastName}
                    setStatus={setStatus}
                    name={name}
                    lastName={lastName}
                />
            }
            <div className="form-group">
                <button type="submit" className="btns btn-danger form-control">
                    {props.form}
                </button>
            </div>

            <div className="forgotPassword">Forgot Password?</div>
            <WrongInputLabel isError={isError} text={props.form === "Sign in"
                ? 'Wrong email or password.'
                : 'User with this email already exist.'
            } />
            {isSuccsess && <Redirect to='/' />}
        </form>
    );
}
