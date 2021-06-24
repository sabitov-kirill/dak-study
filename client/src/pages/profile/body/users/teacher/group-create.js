import React, { Component, useState } from 'react'

import GroupService from '../../../../../model/services/group-service'
import UserService from '../../../../../model/services/user-service'
import FormInput from '../../../../../patterns/common/input';

function GroupCreator(props) {
    const [groupName, setGroupName] = useState('');
    const [groupPassword, setGroupPassword] = useState('');
    const [groupValue, setGroupValue] = useState('Public');
    const [isError, setIsError] = useState(false);

    const createGroup = async () => {
        try {
            if (groupValue === 'Public') {
                await GroupService.create(groupName, true);
            }
            else {
                await GroupService.create(groupName, false, groupPassword);
            }

            alert("Sucsess");
        } catch (e) {
            alert(e);
            setIsError(true);
        }
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                createGroup();
            }}>
                <FormInput
                    label="Group Name"
                    type="text"
                    name="name"
                    placeholder="Enter group name"
                    setValue={setGroupName}
                    value={groupName}
                    isError={isError}
                    setError={setIsError}
                />

                <input
                    type="checkbox"
                    name="Type"
                    value={'Private'}
                    onChange={(e) => setGroupValue(e.target.checked ? 'Private' : 'Public')}
                /> Private <br />

                {groupValue === 'Private' &&
                    <FormInput
                        label="Group Password"
                        type="text"
                        name="name"
                        placeholder="Enter group password"
                        setValue={setGroupPassword}
                        value={groupPassword}
                        isError={isError}
                        setError={setIsError}
                    />
                }

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default GroupCreator;