import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom'

import TestService from '../../model/services/test-service'
import './card.scss'

const TestCard = props => {
    return (
        <Link to={location => (`${location.pathname}/${props.test.id}`)}>
            <div className={props.test.difficulty}>
                <div className="flip">
                    <div className="front">
                        <h1>{props.test.name}</h1>
                    </div>
                    <div className="back">
                        <h2>{props.testResult}</h2>
                        <p>{props.test.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function Body(props) {
    const [content, setContent] = useState(<h1>tests are loading</h1>);
    const { theme } = useParams();

    const setRestResult = (result) => {
        if (result !== -1) {
            return `last result: ${result}%`;
        } else {
            return "last result: none"
        }
    }

    useEffect(async () => {
        try {
            const tests = await TestService.getList(theme);
            const cards = tests.map(test => {
                return (
                    <TestCard
                        test={test}
                        testResult={setRestResult(-1)}
                    />
                );
            });

            setContent(<>{cards}</>);
        } catch (e) {
            setContent(<h1>tests loading error.</h1>);
        }
    }, []);

    return (
        <>
            <h1>{props.theme}</h1>
            <div className="collectCards">{content}</div>
        </>
    )
}