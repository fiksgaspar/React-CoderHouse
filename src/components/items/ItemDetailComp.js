import React from 'react'
import CountContainer from '../../container/CountContainer'
import './itemdetail.css'
import {Link} from 'react-router-dom'

const ItemDetailComp = ({item, onAdd, cambioBoton}) => {
    return (
             <div key={item.id} className="detalle--item">

               <p className="tarjeta--title"><b>{item.title}</b></p>
               <div className="tarjeta--descr">
                 <img className="tarjeta--img" src={item.imag} alt="*"></img>
                   <div className="tarjeta--descr-pr">
                   <p className="tarjeta--info">{item.description}</p>
                   <p className="tarjeta--price">  
                        <strong>$</strong>
                        <strong>{item.price}</strong>
                    </p>
                </div> 

             </div>

                <div className="tarjeta--contador">
                   {cambioBoton ?  <CountContainer id={item.id} stock={item.stockActual} onAdd={onAdd}/> : <div className="terminar-compra"><Link to={"/cart"}><button className="btn-terminar-compra">Terminar Compra</button></Link></div> }
                </div>
                
                
            </div>
       
        
    )
}

export default ItemDetailComp
