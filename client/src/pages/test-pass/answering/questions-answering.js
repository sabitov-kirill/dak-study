import React, { useState } from 'react';

import Question from './question'

export default function QuestionsAnswering(props) {
    const [answers, setAnswers] = useState([]);

    const selectQuestionAnswer = (questionIndex) => {
        setAnswers((answers) => {
            answers[questionIndex] = questionIndex;
            return answers;
        });
    }

    const questions = props.questionsList.map((question, index) => {
        return (
            <Question
                question={question}
                selectAnswer={(value) => selectQuestionAnswer(index)}
            />
        );
    });

    const content =
        <form onSubmit={(e) => {
            e.preventDefault();
            props.checkAnswers(answers);
        }}>
            { questions }
            <input type='submit' value='Send' />
        </form>;

    return (
        <div className='test-pass'>
            <h1>test passing page</h1>
            { content }
        </div>
    )
}