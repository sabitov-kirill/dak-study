import { Fragment } from "react";
import "./card.scss"

const TestCard = props => {
    return (
        <div className="flip">
            <div className="front">
                <h1>{props.testName}</h1>
            </div>
            <div className="back">
                <h2>{props.testResult}</h2>
                <p>{props.testDescription}</p>
            </div>
        </div>
    );
}

export default function Body(props) {
    return (
        <Fragment>
            <h1>{props.theme}</h1>
            <div>
                {props.tests.map(test => {
                    return (
                        <TestCard
                            testName={test.testName}
                            testResult={test.testResult}
                            testDescription={test.testDescription}
                        />
                    );
                })}
            </div>
        </Fragment>
    )
}