import React, { useState, useContext } from 'react';

import GroupService from '../../../../../model/services/group-service';
import FormInput from '../../../../../patterns/common/input';

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
            alert(e);
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
        </div>
    );
}

export default function GroupCreate(props) {
    return (
        <div className="group-content">
            {!props.isVisible &&
                <button className="ButGroup" onClick={() => props.setIsVisible(true)}>
                    Create new group
            </button>
            }
            {props.isVisible &&
                <>
                    <GroupCreatenForm />
                    <button className="ButGroup" onClick={() => props.setIsVisible(false)}>
                        Close
                    </button>
                </>
            }
        </div>
    );
}