import React, { Component } from 'react';

import Option from './option';

function HeadQuestion(props) {
    return (
        <div>
            <label htmlFor="questionName">Name</label>
            <input
                type="text"
                id="questionName"
                value={props.text}
                onChange={props.nameChange}
            />
            <button onClick={props.close}>close</button>
            <button onClick={() => props.remove(props.index)}>delete</button>
        </div>
    );
}

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            isOpened: true,
            text: this.props.text,
            answer: '',
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addOption = this.addOption.bind(this);
        this.handleOnRadio = this.handleOnRadio.bind(this);
        this.changeOption = this.changeOption.bind(this);
    }

    handleClose() {
        this.setState(state => ({
            isOpened: !state.isOpened
        }));
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleOnRadio(value) {
        this.setState({ answer: value });
    }

    addOption() {
        this.setState(state => {
            return { options: [...state.options, ' '] }
        });
    }

    changeOption(text, index) {
        const options = this.state.options;

        this.setState({
            options: options.map((option, id) => {
                return (id !== index ? option : text);
            })
        })
    }

    render() {
        return (
            <div tabIndex="0" onBlur={() => this.props.change({text: this.state.text, options: this.state.options, answer: this.state.answer}, this.props.index)}>
                <HeadQuestion
                    close={this.handleClose}
                    remove={this.props.remove}
                    index={this.props.index}
                    // nameChange={this.props.change}
                    nameChange={this.handleChange}
                    text={this.state.text}
                />

                {
                    this.state.isOpened && 
                    <div>
                        <button onClick={this.addOption}>new option</button>
                        <div>
                            {this.state.options.map((option, index) => {
                                return <Option
                                            index={index}
                                            key={index} 
                                            onClick={this.handleOnRadio} 
                                            onChange={this.changeOption}
                                        />
                            })}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Question;