import React from 'react';

import RadioSelector from '../../../patterns/common/radio-selector'

export default function Question(props) {
    return (
        <div>
            <p>{props.question.text}</p>
            <RadioSelector
                selectorsText={props.question.options}
                onClick={props.selectAnswer}
                name={props.question.text}
            />
        </div>
    );
}