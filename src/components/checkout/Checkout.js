import React from 'react'
import './checkout.css'

function Checkout() {
    return (
        <div className="checkout-box">
            <input type="text" placeholder="Nombre"></input>
            <input type="number" placeholder="Telefono"></input>
            <input type="email" placeholder="Email"></input>

        </div>
    )
}

export default Checkout
