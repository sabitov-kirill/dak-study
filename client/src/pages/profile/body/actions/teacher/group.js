import React, { Component } from 'react';

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Marks</th>
          <th></th>
        </tr>
      </thead>
    )
  }

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpened: false,
            students: [{ name: "student1:", marks: [3, 2, 1, 3] }, { name: "student2:", marks: [3, 4, 5, 3] }],
            mouseEnter: false,
            getData: false 
            };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleClick() {
        if (!this.state.getData) {
            // TODO: get students from group name and add them in state
            // get students marks and set it

            this.setState({ getData: true });
        }

        this.setState(state => ({
            isOpened: !state.isOpened
        }));
    }

    handleMouseEnter() {
        this.setState({ mouseEnter: true });
    }

    handleMouseLeave() {
        this.setState({ mouseEnter: false });
    }

    getMarks(student) {
        return (
            <div>{student.marks.join(' ')}</div>
        );
    }

    removeStudent(student) {
        const {students} = this.state;

        this.setState({
            students: students.filter(children => {
                return children !== student;
            }),
        });
    }

    render() { 
        return ( 
            <div>
                <span onClick={this.handleClick}>Group "clickable"</span>
                {
                    this.state.isOpened &&
                    <div>
                    {
                        this.state.students.length !== 0 &&
                        <table>
                            <TableHeader />
                            <tbody>
                            {
                                this.state.students.map(student => {
                                    return (
                                            <tr>
                                                <td>{student.name}</td>
                                                <td>{this.getMarks(student)}</td>
                                                <td>
                                                    <div>
                                                        {/* send message button */}
                                                        {/* TODO */}
                                                        <button onClick=""><img src="" /></button> <br />
                                                        <button onClick={() => this.removeStudent(student)} >Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                })
                            }
                            </tbody>
                        </table>
                    }
                    </div>
                }
            </div>
         );
    }
}
 
export default Group;