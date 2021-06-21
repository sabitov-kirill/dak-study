import LoginControl from './login/login-control'

function LogoSpace(props) {
    return (
        <a>
            <img src="../../../../public/favicon.ico"></img>
            <span>DAK-Study</span>
        </a>
    );
}

function DivSpace(props) {
    return (
        <div>
            <LogoSpace />
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
