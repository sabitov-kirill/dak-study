import { Context } from '../../../index.js';
import { useContext } from 'react';
import LoginControl from './login/login-control';

function LogoSpace(props) {
    return (
        <div >
            <img src="../../../../public/favicon.ico"></img>
            <span >DAK-Study</span>
        </div>
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
        <header className="Logo">
            <DivSpace />
        </header>
    );
}
