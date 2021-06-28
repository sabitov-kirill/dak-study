import React, { useState } from 'react';

import Question from './question'

export default function QuestionsAnswering(props) {
    const [answers, setAnswers] = useState([]);

    const selectQuestionAnswer = (answer, questionIndex) => {
        setAnswers((answers) => {
            answers[questionIndex] = answer;
            return answers;
        });
    }

    const questions = props.questionsList.map((question, index) => {
        return (
            <Question
                question={question}
                selectAnswer={(value) => selectQuestionAnswer(value, index)}
            />
        );
    });

    const content =
        <form onSubmit={(e) => {
            e.preventDefault();
            props.checkAnswers(answers);
        }}>
            <div>{questions}</div>
            <input type='submit' value='Send' />
        </form>;

    return (
        <div className='test-pass'>
            <h1>test passing page</h1>
            { content }
        </div>
    )
}