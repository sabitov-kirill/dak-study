import React, { Component } from 'react';

function HeadQuestion(props) {
    return (
        <div>
            <label htmlFor="questionName">Name</label>
            <input 
                type="text"
                id="questionName"
                value={props.text}
                onChange={(e) => props.nameChange(e.target.value)}
            />
            <button onClick={props.close}>close</button>
            <button onClick={() => props.remove(props.index)}>delete</button>
        </div>
    );
}

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variants: [],
            isOpened: true,
         };
        
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState(state => ({
            isOpened: !state.isOpened
        }));
    }
    
    render() { 
        return ( 
            <div>
                <HeadQuestion
                    close={this.handleClose}
                    remove={this.props.remove}
                    index={this.props.index}
                    nameChange={this.props.change}
                    text={this.props.text}
                />
            </div>
         );
    }
}
 
export default Question;