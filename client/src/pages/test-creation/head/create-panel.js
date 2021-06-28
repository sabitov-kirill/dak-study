import React, { Component } from 'react';
import { useParams } from 'react-router';

import RadioSelector from '../../../patterns/common/radio-selector'

import Body from "./../body/body"

const ThemeSelector = (props) => {
    const themeSelectors = [
        'mechanics',
        'molecular',
        'electrodynamics',
        'magnetism',
        'optics'
    ];

    return (
        <div className="need">
            <h3>Theme choose</h3>
            <div className="Opp">
                <RadioSelector selectorsText={themeSelectors} onClick={props.onClick} name='theme' />
            </div>
        </div>
    );
};

const DifficultySelector = (props) => {
    const difficultySelectors = [
        'low',
        'medium',
        'hard',
    ];

    return (
        <div className="diff">
            <h3>Difficulty</h3>
            <div className="Opp level">

                <RadioSelector selectorsText={difficultySelectors} onClick={props.onClick} name='difficulty' />
            </div>
        </div>
    );
};

const Wrapper = (props) => { const { theme } = useParams(); return <HeadForm theme={theme} ok={props.ok} submit={props.submit} /> }

class HeadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: '',
            name: '',
            description: '',
            difficulty: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    if (this.props.ok !== 0) {
                        this.props.submit(this.state.theme, this.state.name, this.state.description, this.state.difficulty);
                        e.target.reset();
                    }
                    e.preventDefault();
                }}>
                    <div className="ZagTest">
                        <h1>Create new test</h1>
                        <input type="submit" value="Create" />
                    </div>
                    <div className="allTests">
                        <div className="vvod">
                            <ThemeSelector onClick={this.handleInputChange} />
                            <DifficultySelector onClick={this.handleInputChange} /></div>
                        <div className="Pole">

                            <h3>Info</h3>

                            <input
                                type="text"
                                id="entryName"
                                placeholder="Entry name"
                                required
                                onChange={this.handleInputChange}
                                name="name"
                            /> <label htmlFor="entryName">Name</label>


                            <input
                                type="text"
                                id="entryDescription"
                                placeholder="Entry description"
                                required
                                onChange={this.handleInputChange}
                                name="description"
                                className="second"
                            /><label htmlFor="entryDescription">Description</label>
                        </div>

                    </div>
                    <Body
                        questions={this.props.questions}
                        removeQuestion={this.props.removeQuestion}
                        addQuestion={this.props.addQuestion}
                        changeQuestion={this.props.changeQuestion}
                    />
                </form>
            </div>
        );
    }
}

export default HeadForm;
