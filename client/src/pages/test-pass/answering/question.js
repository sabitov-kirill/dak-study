import React from 'react';

import QuestionOptions from './question-options'

export default function Question(props) {
    return (
        <div>
            <p>{props.question.text}</p>
            <QuestionOptions
                selectAnswer={props.selectAnswer}
                options={props.question.options}
                questionText={props.question.text}
            />
        </div>
    );
}