import { Context } from '../../../index.js';
import { useContext } from 'react';
import LoginControl from './login/login-control';

function LogoSpace(props) {
    return (
        <a>
            <img src="../../../../public/favicon.ico"></img>
            <span>DAK-Study</span>
        </a>
    );
}

function DivSpace(props) {
    let session = useContext(Context);
    return (
        <div>
            <LogoSpace />
            {/* <LoginControl isLoggedIn={session.user.isLoggedIn} /> */}
            <LoginControl isLoggedIn={false} />
        </div>
    );
}

export default function Header(props) {
    return (
        <header>
            <DivSpace />
        </header>
    );
}
