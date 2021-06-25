export default function FormInput(props) {
    return (
        <div className="form-group forListGroups input-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                className={props.className + props.isError ? ' error' : ''}
                placeholder={props.placeholder}
                value={props.value}
                maxLength={props.maxLength}
                onChange={e => {
                    let value = e.target.value.trim();
                    if (props.shouldMakeLowercase) value = value.toLowerCase();
                    props.setValue(value);
                    props.setError(false);
                }}
                required
            />
        </div>
    );
}
