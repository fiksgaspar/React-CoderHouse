import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserProvider'
import './order.css'

function Order({orderId, clearItems, status}) {
    let history = useHistory()
    const {user} = useContext(UserContext)

    
    useEffect(()=>{
        if(orderId){
            clearItems()
        }
    },[orderId])

    function routeChange(){
        history.push('/')
      }
  
    return (
        <div className="order">
          <div className="order-frame">
              <div className="order-box">
                <h2>Gracias por su compra {user}!</h2>
                <h2>Este es su  N° de seguimiento:  {orderId}</h2> 
                <Link to="/" className="link"><button className="btn-volver" type="button">Volver a comprar!</button></Link>
              </div>
            </div> 
        </div>
    )
}

export default Order
