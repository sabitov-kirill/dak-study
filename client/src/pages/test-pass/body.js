import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import TestServise from '../../model/services/test-service'
import QuestionsAnswering from './answering/questions-answering'
import QuestionsResults from './results/questions-results'

export default function Body() {
    const [content, setContent] = useState(<h1>test questions are loading</h1>);
    const { id } = useParams();
    let questionsList;

    const checkAnswers = async (answers, id) => {
        try {
            const checkedAnswers = await TestServise.checkAnswers(answers, id);
            setContent(<QuestionsResults
                questionsList={questionsList}
                checkedAnswers={checkedAnswers}
            /*testResult={answers}*/
            />);
        } catch (e) {
            setContent(<h1>test answers check error.</h1>);
        }
    }

    // Loading questions once
    useEffect(async () => {
        try {
            questionsList = await TestServise.getQuestions(id);
            setContent(<QuestionsAnswering
                questionsList={questionsList}
                checkAnswers={(answers) => checkAnswers(answers, id)}
            />);
        } catch (e) {
            setContent(<h1>test questions loading error.</h1>);
        }
    }, []);

    return <>{content}</>;
}