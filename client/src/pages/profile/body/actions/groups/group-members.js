import React, { Component } from 'react'
import Popup from 'reactjs-popup';

import GroupService from '../../../../../model/services/group-service'
import './group-members-popup.css'

function GroupMembersTableHead() {
    return (
        <thead>
            <tr className='membersTableHead'>
                <td>#</td>
                <td>Member Name</td>
                <td>Actions</td>
            </tr>
        </thead>
    );
}

function GroupMembersTableBody(props) {
    let membersRows = props.membersList.map((member, index) => {
        return (
            <tbody>
                <tr key={member.name}>
                    <td>{index}</td>
                    <td>{member.name}</td>
                    <td><button>Send Message</button></td>
                </tr>
            </tbody>
        );
    })

    return <>{membersRows}</>;
}

class GroupMembersTable extends Component {
    constructor(props) {
        super(props);
        this.state = { isGroupsLoaded: false };
    }

    async componentDidMount() {
        try {
            this.groupUsers = await GroupService.getUsers(this.props.groupName);
            this.setState({ isGroupsLoaded: true });
        } catch { }
    }

    render() {
        if (this.state.isGroupsLoaded)
            return (
                <table>
                    <GroupMembersTableHead />
                    <GroupMembersTableBody membersList={this.groupUsers.usersData} />
                </table>
            );
        else
            return (
                <p>Loading</p>
            );
    }
}

export default function GroupMemmbersPopup(props) {
    return (
        <Popup
            className='membersPopup'
            onClose={props.onClose}
            open={props.isOpen}
            modal
        >
            <div className="modal">
                <div className="header"> Group "{props.groupName}" members list </div>
                <GroupMembersTable groupName={props.groupName} />
            </div>
        </Popup>
    );
}

const TestMembersList = [
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
    { name: 'John Doe' },
]