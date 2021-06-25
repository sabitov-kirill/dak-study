import React, { Component } from 'react';

import Header from "./../../patterns/common/header/header"
import Footer from "./../../patterns/common/footer/footer"
import Body from "./body"

// export default function TestPage(props) {
//     return (
//         <div>
//             <Header />
//             <Body theme={props.theme} tests={props.tests} />
//             <Footer />
//         </div>
//     );
// }

class Test {
    constructor(name, result, description, diff) {
        this.testName = name;
        this.testResult = "last result: " + result;
        this.testDescription = description;
        this.testDiff = diff;
    }
}

class TestPage extends Component {
    state = {
        theme: "ASDASDASD",
        tests: [
            new Test("basic concepts", "none", "basic diffinitions and consepts of mechanic", "light"),
            new Test("uniform movement", "82%", "movement without acceleration and its properties", "light"),
            new Test("accelerated movement", "47%", "movement with acceleration and uniformly accelerated motion and its properties", "normal"),
            new Test("movement at an angle to the horizon", "none", "derivation of formulas for motion at an angle to the horizon and its properties", "normal"),
            new Test("circular motion", "30%", "derivation of formulas for circular motion, its properties, acceleration decomposition", "hard"),
        ],
    };

    render() {
        return (
            <div>
                <Body theme={this.state.theme} tests={this.state.tests} />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default TestPage;
