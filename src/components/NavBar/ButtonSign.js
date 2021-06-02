import React,{useContext} from 'react'
import './buttonSign.css'
import {Link} from 'react-router-dom'
import { UserContext } from '../../Context/UserProvider'

const ButtonSign = () => {
    const {user} = useContext(UserContext)
    return (
        <Link to="sign-up" >
            {user? <button className="btn">Hola, {user.displayName}</button> : <button className="btn">Sign Up</button>
}
        </Link >
    )
}

export default ButtonSign
