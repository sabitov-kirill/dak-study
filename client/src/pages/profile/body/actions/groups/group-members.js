import React from 'react'
import Popup from 'reactjs-popup';

import './group-members-popup.css'

function GroupMembersTableHead() {
    return (
        <tr className='membersTableHead'>
            <td>#</td>
            <td>Member Name</td>
            <td>Actions</td>
        </tr>
    );
}

function GroupMembersTableBody(props) {
    let membersRows = props.membersList.map((member, index) => {
        return <tr key={member.name}>
            <td>{index}</td>
            <td>{member.name}</td>
            <td><button>Send Message</button></td>
        </tr>
    })

    return <>{membersRows}</>;
}

function GroupMembersTable(props) {
    return (
        <table>
            <GroupMembersTableHead />
            <GroupMembersTableBody membersList={TestMembersList} />
        </table>
    );
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
                <GroupMembersTable />
            </div>
        </Popup>
    );
}

const TestMembersList = [
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
    {name: 'John Doe'},
]