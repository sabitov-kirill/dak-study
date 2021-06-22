import React, { Component } from 'react';

class TestResult extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isOpened: !state.isOpened
        }));
    }

    render() { 
        return ( 
            <div>
                <span onClick={this.handleClick}>Test Results "clickable"</span>
                {this.state.isOpened && 
                <ul>
                    {Array.from(this.props.testResult).map(test => {
                        return (
                            <li>
                                <div>
                                    <div>{test[0]}</div>
                                    <div>{test[1]}</div>
                                </div>
                            </li>
                        );
                      })
                    }
                </ul>}
            </div>
         );
    }
}
 
export default TestResult;
