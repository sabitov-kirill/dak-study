// import Teacher from "./users/teacher/teacher"
// import Student from "./users/student/student"
import ChooseUser from "./users/user"
import GroupList from "./group-list"
// import { Context } from "../../../index"
// import { useContext } from "react";


// client status stored in context

// CURRENT SOLUTION - Absrtact prop - userStatus
//                                  - userName
//                                  - userEmail



// function SimpleAccoutInfo(props) {
//     session = useContext(Context);

//     return (
//         <div>
//             <div>
//                 <div>{userName}</div>
//                 <div>{userEmail}</div>
//             </div>
//             <div>
//                 <button onClick={session.signOut}>
//                     <img scr="" />
//                 </button>
//             </div>
//         </div>
//     );
// }

export default function Body(props) {
    // return (this.props.userStatus === "Teacher"
    //     ? <Teacher />
    //     : <Student />);

    // here need to get session from context

    return (
        <div>
            <h1>Profile</h1>
            {/* <SimpleAccoutInfo /> */}
            <GroupList userGroup={['abc', 'asd']} />
            {/* in props of group 'userGroup' list need to give user groups from context */}
            <ChooseUser />
        </div>
    );
}