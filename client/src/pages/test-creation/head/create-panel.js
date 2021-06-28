import React, { Component } from 'react';
import { useParams } from 'react-router';

import RadioSelector from '../../../patterns/common/radio-selector'

const ThemeSelector = (props) => {
    const themeSelectors = [
        'mechanics',
        'molecular',
        'electrodynamics',
        'magnetism',
        'optics'
    ];

    return (
        <div>
            <RadioSelector selectorsText={themeSelectors} onClick={props.onClick} name='theme' />
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
        <div>
            <RadioSelector selectorsText={difficultySelectors} onClick={props.onClick} name='difficulty' />
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
                        this.props.submit(this.props.theme, this.state.name, this.state.description, this.state.difficulty);
                        e.target.reset();
                    }
                    e.preventDefault();
                }}>
                    <div>
                        <h1>Create new test</h1>
                        <input type="submit" value="Create" />
                    </div>
                    <div>
                        <label htmlFor="entryName">Name</label>
                        <input
                            type="text"
                            id="entryName"
                            placeholder="Entry name"
                            required
                            onChange={this.handleInputChange}
                            name="name"
                        />

                        <label htmlFor="entryDescription">Description</label>
                        <input
                            type="text"
                            id="entryDescription"
                            placeholder="Entry description"
                            required
                            onChange={this.handleInputChange}
                            name="description"
                        />
                        <DifficultySelector onClick={this.handleInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default HeadForm;
