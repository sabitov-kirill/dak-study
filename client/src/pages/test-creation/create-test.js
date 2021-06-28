import React, { Component } from 'react';

import './test-create.scss'

import HeadForm from './head/create-panel';
import Body from "./body/body"
import Header from "./../../patterns/common/header/header"
import Footer from "./../../patterns/common/footer/footer"

import TestService from '../../model/services/test-service'

class TestCreationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.setState((state) => {
            return { questions: [...state.questions, question] }
        })
    }

    handleOnSubmitForm(theme, name, description, difficulty) {
        TestService.create(theme, name, description, difficulty, this.state.questions);

        this.setState({ questions: [] });
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
