import React, { useState, useContext } from 'react';

import UserService from '../../../../../model/services/user-service';
import GroupService from '../../../../../model/services/group-service';
import FormInput from '../../../../../patterns/common/input';

function GroupJoinForm(props) {
    const [nameValue, setNameValue] = useState();              // Group name
    const [passwordValue, setPasswordValue] = useState('');    // Group password
    const [isGroupPrivate, setGroupPrivacy] = useState(false); // Group privacy status
    const [isError, setError] = useState(false);               // Wrong group name or password status
    const [isNameCorrect, setNameIsCorrect] = useState();      // Name correct status

    const getGroupPrivacy = async () => {
        try {
            let privacy = await GroupService.getPrivacy(nameValue);
            setGroupPrivacy(privacy.isPrivate);
            setNameIsCorrect(true);
        } catch (e) {
            setError(true);
        }
    }

    const joinGroup = async () => {
        try {
            if (isGroupPrivate) {
                await UserService.joinGroup(nameValue, isGroupPrivate, passwordValue);
            } else {
                await UserService.joinGroup(nameValue, isGroupPrivate);
                setPasswordValue('');
            }

            window.location.replace("/profile");
        } catch (e) {

        }
    }

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                getGroupPrivacy();
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
                {!isNameCorrect && <input type="submit" value="Check" />}
            </form>
            <form onSubmit={event => {
                event.preventDefault();
                joinGroup();
            }}>
                {isGroupPrivate && <FormInput
                    label="Group Password"
                    type="text"
                    placeholder="Enter group password"
                    setValue={setPasswordValue}
                    value={passwordValue}
                    setError={setError}
                    isError={isError}
                />}

                {isNameCorrect && <input type="submit" value="Join" />}
            </form>
        </div >
    );
}

export default function GroupJoin(props) {
    return (
        <>
            {!props.isVisible &&
                <button className="ButGroup" onClick={() => props.setIsVisible(true)}>
                    Join new group
                </button>
            }
            {props.isVisible &&
                <>
                    <GroupJoinForm />
                    <button className="ButGroup1" onClick={() => props.setIsVisible(false)}>
                        Close
                    </button>
                </>
            }
        </>
    );
}