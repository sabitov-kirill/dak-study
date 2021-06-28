import { Redirect } from 'react-router';
import { useContext, useState } from "react";

import { Context } from "../../../index"
import ActionsContainer from "./actions/actions-container"
import InfoPanel from "./info-panel"

export default function Body() {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    let session = useContext(Context);

    const signOut = async () => {
        try {
            await session.signOut();
            setShouldRedirect(true);
        } catch {
            alert('Sign Out error.');
        }
    }

    return (
        <>
            { session.isLoggedIn &&
                <div className='profileBody'>

                    <InfoPanel className='profileInfo' isTeacher={session.user.status === 'teacher'} signOut={signOut} />
                    <h1 className="ZagolovokProfile">Personal account</h1>
                    <ActionsContainer className='profileActions' />
                </div>
            }
            { !session.isLoggedIn &&
                <div className='profileBody'>
                    <p>You need Sign In to see profile.</p>
                </div>
            }
            { shouldRedirect && <Redirect to='/' />}
        </>
    );
}