import { useState } from "react";

export default function Option(props) {
    const [value, setValue] = useState(props.text);
    const name = `option${props.index}`

    return (
        // <div tabIndex="0" onBlur={props.onChange(value, props.index)}>
        <div className="radioNew">
            <input
                type="radio"
                name={name}
                required
                onClick={() => props.onClick(props.ind)}
            />
            <input
                type="text"
                placeholder="option.."
                onChange={e => setValue(e.target.value)}
                value={value}
                required
                onBlur={() => props.onChange(value, props.ind)}
            />


        </div>
    );
}
