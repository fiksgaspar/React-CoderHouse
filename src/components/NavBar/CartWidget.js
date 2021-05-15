import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useCartContext } from '../../Context/CartContext';

 const CartWidget = () => {
    const {mostrarUnidades}= useCartContext();

    return (
        <>
        <FaShoppingCart /> <span className="contador--carrito">{mostrarUnidades()}</span>
        </>
    )
}
export default CartWidget