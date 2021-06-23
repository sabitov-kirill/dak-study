import React, { Component, useState } from 'react'

import GroupService from '../../../../../model/services/group-service'
import UserService from '../../../../../model/services/user-service'
import FormInput from '../../../../../patterns/common/input';

function GroupCreator(props) {
    const [groupName, setGroupName] = useState('');
    const [groupPassword, setGroupPassword] = useState('');
    const [groupValue, setGroupValue] = useState(false);
    const [isError, setIsError] = useState(false);

    const createGroup = async () => {
        try {
            if (groupValue === 'Public') await GroupService.create(groupName, true);
            else await GroupService.create(groupName, false, groupPassword);
            
            alert("Sucsess");
            // UserService.joinGroup(groupName);
        } catch (e) {
            alert(e);
            setIsError(true);
        }
    }

    return (
        <div>
            <form onSubmit={createGroup}>
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
                    type="radio"
                    name="Type"
                    value={'Public'}
                    onClick={(e) => setGroupValue(e.target.value)}
                    required
                /> Public <br />
                <input
                    type="radio"
                    name="Type"
                    value={'Private'}
                    onClick={(e) => setGroupValue(e.target.value)}
                    required
                /> Private <br />

                {groupValue === 'Private' &&
                    <FormInput
                        label="Group Password"
                        type="text"
                        name="name"
                        placeholder="Enter group password"
                        setValue={setGroupPassword}
                        value={groupPassword}   
                    />
                }

                <input type="submit" value="Create" />
            </form>
        </div>
    );
}
 
export default GroupCreator;