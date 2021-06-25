import { Redirect } from 'react-router';
import { useContext, useState } from "react";

import { Context } from "../../../index"
import ActionsContainer from "./actions/actions-container"
import InfoPanel from "./info-panel"
import "./../profile.css"

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
                    <h1 className="ZagolovokProfile">Personal account</h1>
                    <InfoPanel className='profileInfo' signOut={signOut} />
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