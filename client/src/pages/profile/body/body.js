import { Redirect } from 'react-router';
import { useContext, useState } from "react";

import { Context } from "../../../index"
import ChooseUser from "./users/user"

function SimpleAccoutInfo(props) {
    return (
        <div>
            <div>
                <div>{props.user.name}</div>
                <div>{props.user.email}</div>
            </div>
            <div>
                <button onClick={props.signOut}>Sign out</button>
            </div>
        </div>
    );
}

export default function Body() {
    let session = useContext(Context);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    let content = session.isLoggedIn
        ? <div>
            <h1>Profile</h1>
            <SimpleAccoutInfo
                user={session.user}
                signOut={async () => {
                    try {
                        await session.signOut();
                        setShouldRedirect(true);
                    } catch {
                        alert('Sign Out error.');
                    }
                }}
            />

            /* in props of group 'userGroup' list need to give user groups from context */
            <ChooseUser status={session.user.status} />
        </div>
        : <div>
            <p>You need Sign In to see profile.</p>
        </div>

    return (
        <>
            { content}
            { shouldRedirect && <Redirect to='/' />}
        </>
    );
}