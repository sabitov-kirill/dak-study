import React from 'react';

export default function QuestionOptions(props) {
    const answers = props.options.map((option) => {
        return (
            <div>
                <input
                    type='radio'
                    value={option}
                    name={props.questionText}
                    onChange={(e) => {
                        props.selectAnswer(e.target.value)
                    }}
                    required
                /><label>{option}</label>
            </div>
        );
    })

    return (
        <div>{answers}</div>
    );
}