import React from 'react'
import './signin.css'

const Signin = () => {
    return (
 
            <div className="form-login">
                <h5>Logueate</h5>
                <input className="form-controls" type="text" placeholder="Usuario "></input>   
                <input className="form-controls" type="pasword" placeholder="Contraseña "></input>  
                <input className="form-button" type="submit" name="" value="Ingresar"></input>
                <p><a href="">¿Olvidaste tu contraseña?</a></p> 

            </div>
    )
}

export default Signin
