import React from 'react'

export default function RadioSelector(props) {
    const selectors = props.selectorsText.map((selectorText) => {
        return (
            <>
            <input 
                type='radio'
                value={selectorText}
                id={selectorText + 'Button'}
                onClick={props.onClick}
                name={props.name}
                required
            />
            <label htmlFor={selectorText + 'Button'}>{selectorText}</label>
            </>
        )
    })

    return <div>{selectors}</div>;
};