import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import TestServise from '../../../model/services/test-service'
import Question from './question'

export default function QuestionsAnswering(props) {
    const [content, setContent] = useState(<h1>test questions are loading</h1>);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [answers, setAnswers] = useState([]);
    const { id } = useParams();

    const selectQuestionAnswer = (answer, questionIndex) => {
        setAnswers((answers) => {
            answers[questionIndex] = answer;
            return answers;
        });
    }

    useEffect(async () => {
        if (!isLoaded && !isError) {
            try {
                const questionsList = await TestServise.getQuestions(id);
                const questions = questionsList.map((question, index) => {
                    return (
                        <Question
                            question={question}
                            selectAnswer={(value) => selectQuestionAnswer(value, index)}
                        />
                    );
                });

                setIsLoaded(true);
                setContent(
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        props.checkAnswers(answers);
                    }}>
                        <div>{questions}</div>
                        <input type='submit' value='Send' />
                    </form>
                );
            } catch (e) {
                setContent(<h1>test questions loading error.</h1>);   
                setIsError(true);
            }
        }
    });

    return (
        <div className='test-pass'>
            <h1>test passing page</h1>
            { content }
        </div>
    )
}