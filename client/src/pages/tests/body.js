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

    let tests_mol = [
        new Test("Heat capacity of gases and solids", "none", "the heat capacity of gases and solids, the Mayer ratio, LawDulong and Petit, and their output", "normal"),
        new Test("Real gas", "47%", "real gas, experimental isotherm of real gas, critical state of matter, Avenarius experiment", "light"),
        new Test("The first and third provisions", "none", "the dependence of the interaction forces of molecules on the distance between them", "hard"),
        new Test("The second provision of the MKT", "27%", "Stern's experiment, Maxwell's distribution of molecules by velocities", "hard"),
        new Test("Isochoric process", "30%", "Charles ' law, molecular and energyinterpretation", "light"),
    ];

    let tests_ele = [
        new Test("Heat capacity of gases and solids", "none", "the heat capacity of gases and solids, the Mayer ratio, LawDulong and Petit, and their output", "normal"),
        new Test("Real gas", "47%", "real gas, experimental isotherm of real gas, critical state of matter, Avenarius experiment", "light"),
        new Test("The first and third provisions", "none", "the dependence of the interaction forces of molecules on the distance between them", "hard"),
        new Test("The second provision of the MKT", "27%", "Stern's experiment, Maxwell's distribution of molecules by velocities", "hard"),
        new Test("Isochoric process", "30%", "Charles ' law, molecular and energyinterpretation", "light"),
    ];

    let allTests = new Map();
    allTests.set("mechanics", tests_mech);
    allTests.set("molecular", tests_mol);
    allTests.set("electrodynamics", tests_ele); // это засовывает массив в словарь

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