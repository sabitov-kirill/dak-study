import React, { useContext, useState } from 'react';

import { Context } from '../../../index'
import WrongInputLabel from './wrong-input-label'

function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [loginStatus, setLogStatus] = useState();
    const session = useContext(Context);

    return (
        <div>
            <input
                onChange={e => {
                    setEmail(e.target.value);
                    setError(false);
                }}
                className={`emailInput ${isError && 'errorEmailInput'}`}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => {
                    setName(e.target.value);
                    setError(false);
                }}
                className={`passwordInput ${isError && 'errorNameInput'}`}
                value={name}
                type="text"
                placeholder='Name'
            />
            <input
                onChange={e => {
                    setLastName(e.target.value);
                    setError(false);
                }}
                className={`passwordInput ${isError && 'errorLastNameInput'}`}
                value={lastName}
                type="text"
                placeholder='Last Name'
            />
            <input
                onChange={e => {
                    setPassword(e.target.value);
                    setError(false);
                }}
                className={`passwordInput ${isError && 'errorPasswordInput'}`}
                value={password}
                type="password"
                placeholder='Password'
            />

            <button
                onClick={async () => {
                    try {
                        await session.signUp(email, name, lastName, password);
                        setLogStatus(session.isLoggedIn);
                    } catch (error) {
                        setError(true);
                    }
                }}
            >
                Sign Up
            </button>

            {isError && <WrongInputLabel text='User with that email already exist.' />}

            {loginStatus
                ? <p>You logged in</p>
                : <p>Please, log in</p>}
        </div>
    );
}

export default Register;