import React, { useState, useContext } from 'react'

import { Context } from '../../../../../index'
import GroupMemmbersPopup from './group-members'
import GroupJoin from './group-join'
import GroupCreate from './group-create'

function GroupsTableHeader() {
    return (
        <div>
            <p>#</p>
            <p>Group Name</p>
        </div>
    );
}

function GroupsTableBody(props) {
    const [groupName, setGrouproupName] = useState();
    const [isPopupOpened, setIsPopupOpened] = useState(false);

    const openPopup = (groupIndex) => {
        setGrouproupName(props.groupsList[groupIndex]);
        setIsPopupOpened(isOpened => !isOpened);
    }

    // Array of table rows
    const groupsRows = props.groupsList.map((gr, index) => {
        return <tr onClick={() => openPopup(index)} key={gr}>
            <td >{index + 1}</td>
            <td className="index" >{gr}</td>
        </tr>
    })

    return (
        <>
            {groupsRows}
            <GroupMemmbersPopup
                groupName={groupName}
                isOpen={isPopupOpened}
                onClose={() => setIsPopupOpened(false)}
            />
        </>
    );
}

function GroupAction(props) {
    const [isActionVisible, setIsActionVisible] = useState(false);

    return (
        <tr>
            <td colSpan='2'>
                {props.action === 'join' &&
                    <GroupJoin isVisible={isActionVisible} setIsVisible={setIsActionVisible} />
                }
                {props.action === 'create' &&
                    <GroupCreate isVisible={isActionVisible} setIsVisible={setIsActionVisible} />
                }
            </td>
        </tr>
    );
}

export default function GroupsTable(props) {
    let session = useContext(Context);

    return (
        <div className="GroupsListTable">
            <h1>Your Groups</h1>
            <div className="ZagTable">
                <GroupsTableHeader />
            </div>
            <table>
                <GroupsTableBody groupsList={session.user.groupsNames} />
                <GroupAction action={session.user.status === 'teacher' ? 'create' : 'join'} />
            </table>
        </div>
    );
}

const TestGroupList = [
    { name: 'group1' },
    { name: 'group2' },
    { name: 'group3' },
    { name: 'group4' },
    { name: 'group5' },
    { name: 'group6' },
    { name: 'group7' },
    { name: 'group8' },
    { name: 'group9' },
]