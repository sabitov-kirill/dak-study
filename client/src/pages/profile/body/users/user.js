import React, { Component } from 'react';

import Teacher from "./teacher/teacher"
import Student from "./student/student"

class ChooseUser extends Component {
    constructor(props) {
        super(props);
        this.state = { status: "Student" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ status: event.target.value });
    }

    render() {
        let user = (this.state.status === "Teacher"
            ? <Teacher userGroup={['zxc', 'flex']} />
            : <Student userGroup={['abc', 'asd']} />);

        return (
            <div>
                <select value={this.state.status} onChange={this.handleChange}>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                </select>
                {user}
            </div>
        );
    }
}

export default ChooseUser;