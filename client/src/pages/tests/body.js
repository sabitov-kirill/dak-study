import { Fragment } from "react";
import { useParams } from "react-router";
import "./card.scss"


class Test {
    constructor(name, result, description, diff) {
        this.testName = name;
        this.testResult = "last result: " + result;
        this.testDescription = description;
        this.testDiff = diff;
    }
}

const TestCard = props => {
    return (
        <div className={props.testDiff}>
            <div className="flip">
                <div className="front">
                    <h1>{props.testName}</h1>
                </div>
                <div className="back">
                    <h2>{props.testResult}</h2>
                    <p>{props.testDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default function Body(props) {
    let { theme } = useParams();

    let tests_mech = [
        new Test("basic concepts", "none", "basic diffinitions and consepts of mechanic", "light"),
        new Test("uniform movement", "82%", "movement without acceleration and its properties", "light"),
        new Test("accelerated movement", "47%", "movement with acceleration and uniformly accelerated motion and its properties", "normal"),
        new Test("movement at an angle to the horizon", "none", "derivation of formulas for motion at an angle to the horizon and its properties", "normal"),
        new Test("circular motion", "30%", "derivation of formulas for circular motion, its properties, acceleration decomposition", "hard"),
    ];

    let allTests = new Map();
    allTests.set("mechanics", tests_mech); // это засовывает массив в словарь

    return (
        <Fragment>
            <h1>{props.theme}</h1>
            <div className="collectCards">
                {allTests.has(theme) && allTests.get(theme).map(test => {
                    return (
                        <TestCard
                            testName={test.testName}
                            testResult={test.testResult}
                            testDescription={test.testDescription}
                            testDiff={test.testDiff}
                        />
                    );
                })}
            </div>
        </Fragment>
    )
}