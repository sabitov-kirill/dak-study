import React, { Component } from 'react';

class WrongInputLabel extends Component {
    render() {
        return (
            <p
                className={'wrongPasswordLabel'}
            >
                {this.props.text}
            </p>
        );
    }
}

export default WrongInputLabel;