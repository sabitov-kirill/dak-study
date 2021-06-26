import React, { Component } from 'react';

import './test-create.scss'

import HeadForm from './head/create-panel';
import Body from "./body/body"
import Header from "./../../patterns/common/header/header"
import Footer from "./../../patterns/common/footer/footer"

// class Question {
//     constructor() {
//         this.text = '';
//         this.options = [];
//         this.answer = '';
//     }
// }

class TestCreationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testName: '',
            testDescription: '',
            testDifficulty: '',
            questions: [],
        };

        this.handleOnSubmitForm = this.handleOnSubmitForm.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
    }

    removeQuestion(index) {
        const { questions } = this.state;

        this.setState({
            questions: questions.filter((question, i) => {
                return i !== index;
            }),
        })
    }

    changeQuestion(new_question, index) {
        const { questions } = this.state;

        this.setState({
            questions: questions.map((question, id) => {
                return (id !== index ? question : new_question);
            })
        })
    }

    addQuestion = (question) => {
        this.setState({ questions: [...this.state.questions, question] })
    }

    handleOnSubmitForm(name, description, difficulty) {
        this.setState({
            testName: name,
            testDescription: description,
            testDifficulty: difficulty,
        });

        // send data after all 

        // and then reset this.state
        // now this isn't done for debug data (check chrome react debugger)
    }

    render() {
        return (
            <div className='testCreat'>
                <Header />
                <HeadForm submit={this.handleOnSubmitForm} ok={this.state.questions.length} />
                <Body
                    questions={this.state.questions}
                    removeQuestion={this.removeQuestion}
                    addQuestion={this.addQuestion}
                    changeQuestion={this.changeQuestion}
                />
                <Footer />
            </div>
        );
    }
}

export default TestCreationPage;
