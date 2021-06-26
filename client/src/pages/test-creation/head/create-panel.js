// export default function asd(props) {
//     return (
// <div>
//     {/* change this on e => {..functions(params)} */}
//     <form onSubmit={props.onSubmit}>

//     </form>
// </div>
//     );
// }

import React, { Component } from 'react';

const RadBut = (props) => {
    return (
        <div>
            <input type="radio" id="lowButton"
                name="difficulty" value="low" required onClick={props.onClick} />
            <label htmlFor="easyButton">low</label>

            <input type="radio" id="mediumButton"
                name="difficulty" value="medium" required onClick={props.onClick} />
            <label htmlFor="mediumButton">medium</label>

            <input type="radio" id="hardButton"
                name="difficulty" value="hard" required onClick={props.onClick} />
            <label htmlFor="hardButton">hard</label>
        </div>
    );
};

class HeadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        this.props.submit(this.state.name, this.state.description, this.state.difficulty);
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
                        <RadBut onClick={this.handleInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default HeadForm;