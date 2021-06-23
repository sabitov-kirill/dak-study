import React, { Component, useState } from 'react';

function GroupForm(props) {
    const [nameValue, setNameValue] = useState();
    const [groupValue, setGroupValue] = useState();
    const [passwordValue, setPasswordValue] = useState();

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    }

    const handleOnClick = (event) => {
        setGroupValue(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    }


    const handleSubmit = (event) => {
        if (groupValue === 'Public') {
            try {
                //add suka group
                setNameValue('');
                setGroupValue('');
                event.target.reset();
            } catch (e) {

            }
        } else if (groupValue === 'Private') {
            // check if group exists and password
            // send data
            setNameValue('');
            setGroupValue('');
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
                    <input type="text" value={nameValue} onChange={handleNameChange} required />
                </div>

                <input type="radio" name="Type" value="Public" onClick={handleOnClick} required /> Public <br />
                <input type="radio" name="Type" value="Private" onClick={handleOnClick} required /> Private <br />

                {groupValue === 'Private' &&
                    <div>
                        <div>password</div>
                        <input type='password' onChange={handlePasswordChange} required />
                        <br />
                    </div>
                }

                <input type="submit" value="Add" />
            </form>
            <button onClick={props.closeForm}>"close button"</button>
        </div>
    );
}

export default GroupForm;
