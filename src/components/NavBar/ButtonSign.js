import React from 'react'
import './buttonSign.css'
import {Link} from 'react-router-dom'

const ButtonSign = () => {
    return (
        <Link to="sign-up" >
            <button className="btn">Sign Up</button>
        </Link >
    )
}

export default ButtonSign
