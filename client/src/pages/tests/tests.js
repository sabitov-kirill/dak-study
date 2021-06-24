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
    constructor(name, result, description) {
        this.testName = name;
        this.testResult = result;
        this.testDescription = description;
    }
}

class TestPage extends Component {
    state = {
        theme: "ASDASDASD",
        tests: [
            new Test("flex", "result: 10", "//description1//"),
            new Test("asd", "result: 11", "//description2//"),
            new Test("zxc", "result: 12", "//description3//"),
        ],
    };

    render() {
        return (
            <div>
                <Header />
                <Body theme={this.state.theme} tests={this.state.tests} />
                <Footer />
            </div>
        );
    }
}

export default TestPage;
