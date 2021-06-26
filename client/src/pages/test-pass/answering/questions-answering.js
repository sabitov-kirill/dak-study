import React, { Component } from 'react';

import Question from './question'

export default class QuestionsAnswering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            answers: []
        };
    }

    async componentDidMount() {
        this.questions =
            [
                {
                    text: 'What is flex?',
                    options:
                        [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4',
                        ]
                },
                {
                    text: 'What is flex 2?',
                    options:
                        [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4',
                        ]
                },
                {
                    text: 'What is flex 3?',
                    options:
                        [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4',
                        ]
                },
            ];

        this.setState({ isLoaded: true });
    }

    async checkAnswers() {
        let ans = this.state.answers;
    }

    selectQuestionAnswer(answer, questionIndex) {
        this.setState((state) => {
            state.answers[questionIndex] = answer;
            return { answers: state.answers };
        });
    }

    renderQuestions() {
        const questions = this.questions.map((question, index) => {
            return (
                <Question
                    question={question}
                    selectAnswer={(value) => {
                        this.selectQuestionAnswer(value, index);
                    }}
                />
            );
        })

        return (
            <form onSubmit={(e) => {
                this.checkAnswers();
                e.preventDefault();
            }}>
                <div>{questions}</div>
                <input type='submit' value='Send' />
            </form>
        );
    }

    render() {
        let content = this.state.isLoaded
            ? this.renderQuestions()
            : <p>Loading</p>;

        return (
            <div className='test-pass'>
                { content}
            </div>
        );
    }
}