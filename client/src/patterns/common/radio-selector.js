import React from 'react'

export default function RadioSelector(props) {
    const selectors = props.selectorsText.map((selectorText) => {
        return (
            <div className="OptionsTheme">
                <input
                    type='radio'
                    value={selectorText}
                    id={selectorText + 'Button'}
                    onClick={props.onClick}
                    name={props.name}
                    className='radioButton'
                    required
                />
                <label htmlFor={selectorText + 'Button'}>{selectorText}</label>
                <br />
            </div>
        )
    })

    return <div>{selectors}</div>;
};