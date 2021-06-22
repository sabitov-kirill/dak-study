import '../../../pages/main/main.scss'
import LoginControl from './login/login-control'

function LogoSpace(props) {
    return (
        <div >
            <img src="../../../../public/favicon.ico"></img>
            <span >DAK-Study</span>
        </div>
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
        <header className="Logo">
            <DivSpace />
        </header>
    );
}
