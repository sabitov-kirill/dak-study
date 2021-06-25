export default function FormInput(props) {
    return (
        <div className="form-group forListGroups">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                className={props.className + props.isError ? ' error' : ''}
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => {
                    props.setValue(e.target.value);
                    props.setError(false);
                }}
                required
            />
        </div>
    );
}
