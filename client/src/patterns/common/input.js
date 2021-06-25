export default function FormInput(props) {
    return (
        <div className="form-group forListGroups">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                className={props.className + props.isError ? ' error' : ''}
                placeholder={props.placeholder}
                value={props.value}
                maxLength={props.maxLength}
                onChange={e => {
                    let value = props.shouldMakeLowercase
                        ? e.target.value.trim().toLowerCase()
                        : e.target.value.trim();
                    props.setValue(value);
                    props.setError(false);
                }}
                required
            />
        </div>
    );
}
