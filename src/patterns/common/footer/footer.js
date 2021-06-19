function AboutUs(props) {
    return (
        <div>
            <p>Description</p>
            <p>..text here..</p>
        </div>
    );
}

function Contacts(props) {

}

function DivFooter(props) {
    return (
        <div>
            <AboutUs />
        </div>
    );
}

export default function PageFooter(props) {
    return (
        <footer>
            <DivFooter />
        </footer>
    );
}