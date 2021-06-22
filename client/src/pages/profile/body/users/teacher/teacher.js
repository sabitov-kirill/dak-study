import Groups from "./groups";

export default function Teacher(props) {
    return (
        <div>
            <div>
                <Groups userGroup={props.userGroup} />
                {/* Create group */}
            </div>
        </div>
    );
}