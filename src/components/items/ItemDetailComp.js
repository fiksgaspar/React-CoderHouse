import React from 'react'
import CountContainer from '../../container/CountContainer'
import './itemdetail.css'
import {Link} from 'react-router-dom'

const ItemDetailComp = ({id, title, price, img, description, stock, onAdd, cambioBoton}) => {
    return (
             <div key={id} className="detalle--item">

               <p className="tarjeta--title"><b>{title}</b></p>
               <div className="tarjeta--descr">
                 <img className="tarjeta--img" src={img} alt="*"></img>
                   <div className="tarjeta--descr-pr">
                   <p className="tarjeta--info">{description}</p>
                   <p className="tarjeta--price">  
                        <strong>$</strong>
                        <strong>{price}</strong>
                    </p>
                </div> 

             </div>

                <div className="tarjeta--contador">
                   {cambioBoton ?  <CountContainer id={id} stock={stock} onAdd={onAdd}/> : <Link to={"/cart"}><div className="terminar-compra"><button className="btn-terminar-compra">Terminar Compra</button></div></Link> }
                </div>
                
                
            </div>
       
        
    )
}

export default ItemDetailComp
