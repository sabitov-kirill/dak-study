import React, { Component, useContext, useState } from 'react';

import { Context } from '../../../index'
import WrongInputLabel from './wrong-input-label'

function Login() {
    const [email, setEmail] = useState('');
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
                        await session.signIn(email, password);
                        setLogStatus(session.isLoggedIn);
                    } catch (error) {
                        alert(error);
                        setError(true);
                    }
                }}
            >
                Sign In
            </button>

            {isError && <WrongInputLabel text='Wrong email or password.' />}

            {loginStatus
                ? <p>You logged in</p>
                : <p>Please, log in</p>}
        </div>
    );
}

export default Login;