// depending on user status there is an opportunity to receive member's info 

export default function GroupList(props) {
    return (
        <div>
            <span>Groups</span>
            <ul>
                {props.userGroup.map(group => {
                    return <li>{group}</li>;
                })}
            </ul>
        </div>
    );
}