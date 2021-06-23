import React, { Component, useState, useContext } from 'react';

import { Context } from '../../../../../index';
import GroupService from '../../../../../model/services/group-service';
import FormInput from '../../../../../patterns/common/input';

function GroupForm(props) {
    const [nameValue, setNameValue] = useState();              // Group name
    const [passwordValue, setPasswordValue] = useState('');    // Group password
    const [isGroupPrivate, setGroupPrivacy] = useState(false); // Group privacy status

    const [isError, setError] = useState(false);          // Wrong group name or password status
    const [isNameCorrect, setNameIsCorrect] = useState(); // Name correct status

    let session = useContext(Context);

    const getGroupPrivacy = async () => {
        // wathing if group is private
        try {
            let privacy = await GroupService.getPrivacy(nameValue);
            setGroupPrivacy();
            setNameIsCorrect(true);
        } catch (e) {
            setError(true);
        }
    }

    const handleSubmit = (event) => {
        if (isGroupPrivate) {
            try {
                // Clearing fields
                setNameValue('');
                setGroupPrivacy(false);
                event.target.reset();
            } catch (e) {

            }
        } else if (isGroupPrivate) {
            // check if group exists and password
            // send data
            setNameValue('');
            setGroupPrivacy(false);
            setPasswordValue('');
            event.target.reset();

            // else
        }
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>Group name</div>
                    <input 
                        type="text"
                        value={nameValue}
                        className={`baseInput${isError ? ' incorectInput' : ''}${isNameCorrect ? ' correctInput' : ''}`}
                        onBlur={getGroupPrivacy}
                        onChange={(event) => {
                            setNameValue(event.target.value);
                            setError(false);
                        }}
                        required 
                    />
                </div>

                {isGroupPrivate &&
                    <FormInput
                        label="Group Password"
                        type="text"
                        name="name"
                        placeholder="Enter group password"
                        setValue={setPasswordValue}
                        value={passwordValue}   
                    />
                }

                {isNameCorrect && <input type="submit" value="Add" />}
            </form>
            <button onClick={props.closeForm}>"close button"</button>
        </div>
    );
}

export default GroupForm;
