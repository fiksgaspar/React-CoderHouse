import React from 'react'
import {signInWithGoogle} from '../../firebase'
import './googleSign.css'

function GoogleSign() {
    return (
        <div>
            <button className="google-butt" onClick={signInWithGoogle}>
                <img className="gmail-pic" alt="googleSign"src="https://res.cloudinary.com/gpope/image/upload/v1622493679/NewCloset-React/loginGoogle_rwk788.png"></img>
            </button>
        </div>

    )
}

export default GoogleSign
