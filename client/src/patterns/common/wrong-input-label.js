import React from 'react';

export default function WrongInputLabel(props) {
    if (props.isError) {
        return <p className={'wrongPasswordLabel'}>{props.text}</p>;
    } else {
        return <></>;
    }
}