import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext'
import './cart.css'
import {getFirestore} from '../../firebase'
import firebase from 'firebase/app'
import {user, UserContext} from '../../Context/UserProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {

    const {cart, removeItem, clearItems, preciototal} = useCartContext();


    useEffect(()=>{

    },[cart])


    if(cart == 0){
        return(
            <div  className="carrito-vacio">
                <div className="contenedor-carrito">
                    <div className="vacio">
                        <h2>Su carrito esta vacío ! </h2>
                    </div>
                    <div>
                        <Link to="/"><button type="text" className="boton-volver">A comprar !</button></Link>
                    </div>
                </div>
            </div> 
        )
    }


    const notify = () => toast("Gracias por tu compra!")

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
                            <th>{x.cantidad * x.price}</th>
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
                <Link to="/Checkout"><button  className="checkout--compra" onClick={notify}>Checkout</button></Link>
                <ToastContainer />
            </div>

        </div>
         
    )   
}

export default Cart
