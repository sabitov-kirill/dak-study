import React, { Component } from 'react';
import GroupForm from './group-form';

class AddGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          isOpened: !state.isOpened  
        }));
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.handleClick}>"open/close button"</button>
                {this.state.isOpened && <GroupForm closeForm={this.handleClick} />}
            </div>
         );
    }
}

export default AddGroup;
