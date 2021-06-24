import '../../../pages/main/main.scss';

function AboutUs(props) {
    return (
        <div className="Discr">
            <h3>About us</h3>
            <p>text here..</p>
        </div>
    );
}

function Contacts(props) {
    let git_links = [
        ["https://github.com/cgsgDK6", "Daniel Konev"],
        ["https://github.com/CGSGAL6", "Alexandra Lanovaya"],
        ["https://github.com/CGSG-KS6", "Kirill Sabitov"]
    ];

    return (
        <div className="contacts">
            <h3>Contacts</h3>
            <ul>
                {
                    git_links.map(info => {
                        return (
                            <li>
                                <a href={info[0]} >{info[1]}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

function DivRights(props) {
    return (
        <div className="Rights">
            <img src="" />
            <div>
                © 2021 DAK LLC.
                <span> All Rights Reserved. </span>
            </div>
        </div>
    )
}

function DivFooter(props) {
    return (
        <div className="footerClass">
            <div className="commonFooter">
                <AboutUs />
                <Contacts />
            </div>
            <DivRights />

        </div>
    );
}

export default function Footer(props) {
    return (
        <footer>
            <DivFooter />
        </footer>
    );
}
