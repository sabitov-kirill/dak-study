export default function Selection(props) {
    return (
        <div className={props.selectionClass}>
            <div className="container">
                <h1>{props.header}</h1>
                {props.dialog}
                <button
                    id={props.id}
                    type="button"
                    onClick={props.clicked}
                    className="btns btn-outline-danger"
                >
                    {props.buttonText}
                </button>
            </div>
        </div>
    );
}
