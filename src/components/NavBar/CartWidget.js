import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useCartContext } from '../../Context/CartContext';
import './cartwidget.css'

 const CartWidget = () => {
    const {mostrarUnidades}= useCartContext();



    return (
        <>
        <FaShoppingCart /> { mostrarUnidades() ? <span className="contador--carrito">{mostrarUnidades()}</span> : ''}
        </>
    )
}
export default CartWidget