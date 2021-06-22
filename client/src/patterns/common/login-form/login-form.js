import React, { useContext, useState } from 'react';

import Login from './login'
import Register from './register'

function LoginForm() {
    const [action, setAction] = useState(<Login />)

    return (
        <div>
            <input type="button" onClick={() => setAction(<Login />)} value={"Login"} />
            <input type="button" onClick={() => setAction(<Register />)} value={"Register"} />
            {action}
        </div>
    );
}

export default LoginForm;