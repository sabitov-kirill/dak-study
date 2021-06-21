import { Context } from "../../../index";

import React, { useContext, useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const session = useContext(Context);

    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
            />
            <button onClick={() => session.signIn(email, password)}>
                Sign In
            </button>
            <button onClick={() => session.signUp(email, "kirill", "sabitov", password)}>
                Sign Up
            </button>
        </div>
    );
}

export default LoginForm;