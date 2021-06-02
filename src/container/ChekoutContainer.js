import React, { useState, useContext} from 'react'
import firebase from 'firebase/app'
import '../firebase'
import {getFirestore} from '../firebase'
import { UserContext } from '../Context/UserProvider'
import {useCartContext} from '../Context/CartContext'
import Checkoutt from '../components/checkout/Checkoutt'

const ChekoutContainer = () => {

    const {cart, preciototal} = useCartContext()
    const {user} = useContext(UserContext)
    const [orderId, setOrderId] = useState(null)
    const [userOrder, setUserOrder] = useState({nombre:'',email:'',email2:'',telefono:''})
    const [mensajeMail, setMensajeMail] = useState(null)




    const isDisabled = () => {
      if(user == null){
      const { nombre, email, email2, telefono } = userOrder;
      return [nombre, email, email2, telefono ].includes('');
      }else{
          setUserOrder(user)
      }
    };

    function onNameChange(evt) {
        setUserOrder({
          ...userOrder,
          [evt.target.name]: evt.target.value
        });
    }
    

    const onSubmit=()=>{
        if(user == null){
          if(userOrder.email !== userOrder.email2){
            setMensajeMail("Ingresa 2 mails iguales!")
          }else{
          setMensajeMail('')
          handleCompra()
        }
      }else{
          setMensajeMail('')
          handleCompra()
      }
    }
      async function handleCompra(){
        const db = getFirestore();
        const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.id));
        
        const query = await itemsToUpdate.get();
        const batch = db.batch();
        
        const outOfStock = [];
        const orders = db.collection('orders');
        const newOrder = {
            buyer:[userOrder] ,
            cart,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'Orden En Proceso!',
            total: preciototal()
        }
        query.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stockTotal >= cart[idx].cantidad){
                batch.update(docSnapshot.ref, { stockTotal: docSnapshot.data().stockTotal - cart[idx].cantidad});
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id});
            }
        })

        orders.add(newOrder)
                .then((res)=>setOrderId(res.id))
                .catch((err)=>console.log(err))

     }

     return (
         <>
          <Checkoutt isDisabled={isDisabled} onNameChange={onNameChange} onSubmit={onSubmit}  mensajeMail={mensajeMail} orderId={orderId}/>  
          </>
    )
}

export default ChekoutContainer
