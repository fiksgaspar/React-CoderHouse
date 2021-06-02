import React, { useEffect, useState,useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {UserContext} from '../Context/UserProvider'
import {useCartContext} from '../Context/CartContext'
import { getFirestore } from '../firebase'


function OrderContainer() {
    const {user} = useContext(UserContext)
    const {cart, preciototal} = useCartContext()
    const [orderId, setOrderId] = useState()
    const [order, setOrder] = useState({})

 
    const db = getFirestore();
    const orders = db.collection("orders");

    const handleCompra = () =>{
        let NewOrder = {
            buyer:{
                name: user.displayName,
                email: user.email
            },
            cart,
             date:firebase.firestore.Timestamp.fromDate(new Date()),
             total: preciototal()
        };
        setOrder(NewOrder)
        console.log(order)
    }


    useEffect(()=>{
        orders.add(order)
                    .then((id)=>{
                        console.log(id)
                    })
                    .catch((err)=>console.err('error', err))

    },[orders])
    

    return (
        <div>
            <button type="button" onClick={handleCompra}>Terminar Compra</button>
        </div>
    )
}

export default OrderContainer
