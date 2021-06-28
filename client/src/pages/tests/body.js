import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

import TestService from '../../model/services/test-service'
import './card.scss'

const TestCard = props => {
    return (
        <div className={props.testDiff}>
            <Link to="/" >
                <div className="flip">
                    <div className="front">
                        <h1>{props.testName}</h1>
                    </div>
                    <div className="back">
                        <h2>{props.testResult}</h2>
                        <p>{props.testDescription}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default function Body(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [content, setConstent] = useState(<h1>tests are loading</h1>);
    const { theme } = useParams();

    const setRestResult = (result) => {
        if (result !== -1) {
            return `last result: ${result}%`;
        } else {
            return "last result: none"
        }
    }

    // Loading tests
    useEffect(async () => {
        if (!isLoaded && !isError) {
            try {
                const tests = await TestService.getList(theme);
                const cards = tests.map(test => {
                    return (
                        <TestCard
                            testName={test.name}
                            testDescription={test.description}
                            testDiff={test.difficulty}
                            testResult={setRestResult(-1)}
                            testId={test.id}
                        />
                    );
                });

                setConstent(<>{cards}</>);
                setIsLoaded(true);
            } catch (e) {
                setConstent(<h1>tests loading error.</h1>);
                setIsError(true);
            }
        }
    });

    return (
        <>
            <h1>{props.theme}</h1>
            <div className="collectCards">{content}</div>
        </>
    )
}