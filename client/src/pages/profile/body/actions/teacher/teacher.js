import Groups from "./groups";

import GroupCreator from './group-create'

export default function Teacher(props) {
    return (
        <div>
            <div>
                <Groups userGroup={props.userGroup} />
                <GroupCreator />
            </div>
        </div>
    );
}