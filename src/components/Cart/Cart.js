import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext'
import './cart.css'

const Cart = () => {

    const {cart, removeItem, clearItems, preciototal} = useCartContext();


    return (

        <div className="contenedor--compras">
            <table className="tabla--compras">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map ( x => 
                        <tr className="productos-compras" key={x.id}>
                            <th><Link to={`/item/${x.id}`}><img src={x.imag} alt="producto" className="img--compras"></img></Link></th>
                            <th><Link  className="cart--title" to={`/item/${x.id}`}>{x.title}</Link></th>
                            <th>$ {x.price}</th>
                            <th>{x.cantidad}</th>
                            <th>Total</th>
                            <th><button className="btn--compra" onClick={() => removeItem(x.id)}>Remover</button></th>
                        </tr>
                        
                        )}
                </tbody>
            </table>
            <div className="totales--compra">
                <div>
                    <div>Total</div>
                    <div>${preciototal()}</div>
                </div>
                <button className="boton--borrarTodo" onClick={clearItems}>Borrar todo</button>
            </div>
            <div className="checkout">
                <button  className="checkout--compra"><a href="/">Checkout</a></button>
            </div>
        </div>
         
    )   
}

export default Cart
