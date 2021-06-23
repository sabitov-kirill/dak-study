import Form from "./form"

export default function FormContainer(props) {
    const animate = props.userToggle
        ? { left: "20.5%", "box-shadow": "-10px 10px 15px 8px rgba(0, 0, 0, 0.2)" }
        : { left: "50.5%", "box-shadow": "10px 10px 15px 8px rgba(0, 0, 0, 0.2)" };

    return (
        <div className="containForm" style={animate}>
            {props.userToggle ? (
                <div className="container" id="signUp">
                    <Form form="Sign up" submitted={props.signUpSubmit} />
                </div>
            ) : (
                <div className="container" id="signIn">
                    <Form form="Sign in" submitted={props.signInSubmit} />
                </div>
            )}
        </div>
    );
}
