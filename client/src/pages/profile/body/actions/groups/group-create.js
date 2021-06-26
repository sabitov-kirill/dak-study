import React, { useState, useContext } from 'react';

import GroupService from '../../../../../model/services/group-service';
import FormInput from '../../../../../patterns/common/input';
import WrongInputLabel from '../../../../../patterns/common/wrong-input-label'

function GroupCreatenForm(props) {
    const [nameValue, setNameValue] = useState();              // Group name
    const [passwordValue, setPasswordValue] = useState('');    // Group password
    const [isGroupPrivate, setGroupPrivacy] = useState(false); // Group privacy status
    const [isError, setError] = useState(false);               // Incorrect email status

    const createGroup = async () => {
        try {
            if (isGroupPrivate) {
                await GroupService.create(nameValue, isGroupPrivate, passwordValue);
            }
            else {
                await GroupService.create(nameValue, isGroupPrivate);
            }

            window.location.replace("/profile");
        } catch (e) {
            setError(true);
        }
    }

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                createGroup();
            }}>
                <FormInput
                    label="Group Name"
                    type="text"
                    placeholder="Enter group name"
                    setValue={setNameValue}
                    value={nameValue}
                    setError={setError}
                    isError={isError}
                />

                <input
                    type="checkbox"
                    onChange={(e) => setGroupPrivacy(e.target.checked)}
                /> Private <br />
                {isGroupPrivate && <FormInput
                    label="Group Password"
                    type="text"
                    placeholder="Enter group password"
                    setValue={setPasswordValue}
                    value={passwordValue}
                    setError={setError}
                    isError={isError}
                />}

                <input type="submit" value="Create" className="ButGroup" />
            </form>
            <WrongInputLabel isError={isError} text='Group with that name already exist.' />
        </div>
    );
}

export default function GroupCreate(props) {
    let content
    if (props.isVisible) {
        content =
            <><GroupCreatenForm />
                <button className="ButGroup" onClick={() => props.setIsVisible(false)}>
                    Close
                </button></>
    } else {
        content =
            <button className="ButGroup" onClick={() => props.setIsVisible(true)}>
                Create new group
            </button>
    }

    return (
        <div className="group-content">
            {content}
        </div>
    );
}