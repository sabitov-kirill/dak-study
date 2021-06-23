export default function FormInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                name={props.name}
                type={props.type}
                className={'form-control' + props.isError ? ' error' : ''}
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
