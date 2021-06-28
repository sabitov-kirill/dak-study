import React, { useState } from 'react';

import Question from './question'

export default function QuestionsAnswering(props) {
    const [answers, setAnswers] = useState([]);

    const selectQuestionAnswer = (questionIndex, optionIndex) => {
        setAnswers((answers) => {
            answers[questionIndex] = optionIndex;
            return answers;
        });
    }

    const questions = props.questionsList.map((question, index) => {
        return (
            <Question
                question={question}
                selectAnswer={(optionIndex) => selectQuestionAnswer(index, optionIndex)}
            />
        );
    });

    const content =
        <form onSubmit={(e) => {
            e.preventDefault();
            props.checkAnswers(answers);
        }}>
            {questions}
            <input className="alt-button2" type='submit' value='Send' />
        </form>;

    return (
        <div className='test-pass'>
            <h1>test passing page</h1>
            { content}
        </div>
    )
}