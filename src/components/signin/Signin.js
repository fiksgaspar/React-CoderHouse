import React, {useContext}  from 'react'
import './signin.css'
import GoogleSign from './GoogleSign'
import { UserContext } from '../../Context/UserProvider'
import { logOut } from '../../firebase'
import { Link } from 'react-router-dom'

const Signin = () => {
    const {user} = useContext(UserContext)


    return (
        <div className="SignIn">
            <div className="signIn-box">
              {user? <button className="btn-LogOut" type="button" onClick={logOut}>Log Out</button> : <Link to ="/"> <GoogleSign/></Link> }
            </div>
        </div>
     
    )}

export default Signin
