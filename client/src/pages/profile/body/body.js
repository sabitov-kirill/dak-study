// import Teacher from "./users/teacher/teacher"
import Student from "./users/student/student"
import ChooseUser from "./users/user"
import { Context } from "../../../index"
import { useContext } from "react";


// client status stored in context

// CURRENT SOLUTION - Absrtact prop - userStatus
//                                  - userName
//                                  - userEmail



function SimpleAccoutInfo(props) {
    return (
        <div>
            <div>
                <div>{props.userName}</div>
                <div>{props.userEmail}</div>
            </div>
            <div>
                <button onClick={props.signOut}>
                    <img scr="" />
                </button>
            </div>
        </div>
    );
}

export default function Body(props) {

    let session = useContext(Context);

    // return (this.props.userStatus === "Teacher"
    //     ? <Teacher />
    //     : <Student />);

    // here need to get session from context

    return (
        <div>
            <h1>Profile</h1>
            {/* need to add props from session */}
            <SimpleAccoutInfo />
            <ChooseUser />
            {/* in props of group 'userGroup' list need to give user groups from context */}
        </div>
    );
}