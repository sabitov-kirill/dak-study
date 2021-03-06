import { useState } from "react";
import Question from "./question";

class StoreQuestion {
    constructor(text) {
        this.text = text;
        this.options = [];
        this.answer = '';
    }
}

const AddQuest = (props) => {
    const [name, setName] = useState('');

    const a = (e) => {
        props.add(new StoreQuestion(name));
        props.close(false);
        e.preventDefault();
    };

    return (
        <div className="confirm">
            {/* <form name="a" onSubmit={(e) => {
                props.add(new StoreQuestion(name));
                props.close(false);
                e.preventDefault();
            }}> */}
            <input className="alt-input" type="text" onChange={(e) => setName(e.target.value)} placeholder="question" required />
            <input className="alt-button" type="button" value="confirm" onClick={a} />
            {/* </form> */}
        </div>
    )
}

export default function Body(props) {
    const questions = props.questions.map((question, index) => {
        return <Question remove={props.removeQuestion} key={index} index={index} change={props.changeQuestion} text={question.text} />
    })

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div>
            <div>
                {!isClicked && <button className="alt-button" onClick={() => setIsClicked(!isClicked)}>Add</button>}
                {isClicked && <AddQuest add={props.addQuestion} close={setIsClicked} />}
            </div>
            {questions}
        </div>
    );
}