import React, { Component } from 'react';

class Group extends Component {
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
                <span onClick={this.handleClick}>Groups "clickable"</span>
                {
                    this.state.isOpened && 
                    <ul>
                        {
                            this.props.userGroup.map(group => {
                                return <li>{group}</li>;
                            })
                        }
                    </ul>
                }
            </div> 
         );
    }
}
 
export default Group;