import LoginControl from './login-control'

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
            <LoginControl />
        </div>
    );
}

export default function PageHeader(props) {
    return (
        <header>
            <DivSpace />
        </header>
    );
}
