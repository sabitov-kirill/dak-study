import React, { useState, useContext } from 'react';

import { Context } from '../../../../../index';
import GroupService from '../../../../../model/services/group-service';
import FormInput from '../../../../../patterns/common/input';

function GroupJoinForm(props) {
    const [nameValue, setNameValue] = useState();              // Group name
    const [passwordValue, setPasswordValue] = useState('');    // Group password
    const [isGroupPrivate, setGroupPrivacy] = useState(false); // Group privacy status

    const [isError, setError] = useState(false);          // Wrong group name or password status
    const [isNameCorrect, setNameIsCorrect] = useState(); // Name correct status

    let session = useContext(Context);

    const getGroupPrivacy = async () => {
        try {
            let privacy = await GroupService.getPrivacy(nameValue);
            setGroupPrivacy();
            setNameIsCorrect(true);
        } catch (e) {
            setError(true);
        }
    }

    const joinGroup = (event) => {
        try {
            if (isGroupPrivate) {

            } else  {
                setPasswordValue('');
            }

            setNameValue('');
            setGroupPrivacy(false);
            event.target.reset();
        } catch (e) {

        }
    }

    return (
        <div>
            <form onSubmit={joinGroup}>
                <FormInput
                    label="Group Name"
                    type="text"
                    placeholder="Enter group name"
                    setValue={setNameValue}
                    value={nameValue}
                    setError={setError}
                    isError={isError}   
                /><button onClick={getGroupPrivacy}>Check</button>

                {isGroupPrivate && <FormInput
                    label="Group Password"
                    type="text"
                    placeholder="Enter group password"
                    setValue={setPasswordValue}
                    value={passwordValue}
                    setError={setError}
                    isError={isError} 
                />}

                {isNameCorrect && <input type="submit" value="Add" />}
            </form>
        </div>
    );
}

export default function GroupJoin(props) {
    return (
        <>
        {!props.isVisible && 
            <button onClick={() => props.setIsVisible(true)}>
                Join new group
            </button>
        }
        {props.isVisible &&
            <>
            <GroupJoinForm />
            <button onClick={() => props.setIsVisible(false)}>
                Close
            </button>
            </>
        }
        </>
    );
}