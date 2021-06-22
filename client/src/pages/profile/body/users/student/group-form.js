import React, { Component } from 'react';

class GroupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { nameValue: '', groupValue: '', password: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({ nameValue: event.target.value });
    }

    handleOnClick(event) {
        this.setState({ groupValue: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }


    handleSubmit(event) {
        if (this.state.groupValue === 'Public') {
            // check if group exists
            // send data
            this.setState({ nameValue: '', groupValue: '' });
            event.target.reset();

            // else 

        } else if (this.state.groupValue === 'Private') {
            // check if group exists and password
            // send data
            this.setState({ nameValue: '', groupValue: '', password: '' });
            event.target.reset();

            // else
        } else {

        }
        event.preventDefault();
    }
    

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>Group name</div>
                        <input type="text" value={this.state.nameValue} onChange={this.handleNameChange} required />
                    </div>

                    <input type="radio" name="Type" value="Public" onClick={this.handleOnClick} required /> Public <br />
                    <input type="radio" name="Type" value="Private" onClick={this.handleOnClick} required /> Private <br />

                    {this.state.groupValue === 'Private' && 
                        <div>
                            <div>password</div>
                            <input type='password' onChange={this.handlePasswordChange} required />
                            <br />
                        </div>
                    }              

                    <input type="submit" value="Add" />
                </form>
                <button onClick={this.props.closeForm}>"close button"</button>
            </div>
         );
    }
}

export default GroupForm;
