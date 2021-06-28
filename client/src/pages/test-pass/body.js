import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import TestServise from '../../model/services/test-service'
import QuestionsAnswering from './answering/questions-answering'

export default function Body(props) {
    const [content, setContent] = useState(<h1>test questions are loading</h1>);
    const { id } = useParams();

    const checkAnswers = (answers) => {

    }

    // Loading questions once
    useEffect(async () => {
        try {
            const questionsList = await TestServise.getQuestions(id);
            setContent(<QuestionsAnswering questionsList={questionsList}/>);
        } catch (e) {
            setContent(<h1>test questions loading error.</h1>);   
        }
    }, []);

    return (
        <>
        { content }
        </>
    );
}