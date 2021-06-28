import React, { useState } from 'react';

import Question from './question'

export default function QuestionsAnswering(props) {
    const questionsResults = props.questionsList.map((question, index) => {
        return (
            <Question
                question={question}
                checkedAnswer={props.checkedAnswers[index]}
            />
        );
    });

    return (
        <div className='test-pass'>
            <h1 className='testResultHeader'>test results page</h1>
            <h1 className='testResultText' >your result: {props.testResult}%</h1>
            {questionsResults}
        </div>
    )
}