import React from 'react';

export default function Question(props) {
    let optionsClasses = new Array(props.question.options.length);
    optionsClasses.fill('optionResult');

    if (props.checkedAnswer.isCorrect) {
        optionsClasses[props.checkedAnswer.inputIndex] += 'Correct'
    } else {
        optionsClasses[props.checkedAnswer.correctIndex] += 'Correct'
        optionsClasses[props.checkedAnswer.inputIndex] += 'Wrong'
    }

    const options = props.question.options.map((option, index) => {
        <>
            <p className={optionsClasses[index]}
            >{option}</p>
            <br />
        </>
    });

    return (
        <div>
            <p>{props.question.text}</p>
            { options}
        </div>
    );
}