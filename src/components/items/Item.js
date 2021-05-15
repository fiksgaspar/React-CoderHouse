import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'


 const Item = ({price, title, description, img, stock, category, id}) => {

    return (
        
            <div className="tarjeta">
               <div>
                    <p><b  className="tarjeta--title">{title}</b></p>
                    <p className="tarjeta--price">  
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
               </div>
               <div className="div--imagenes">
                    <Link to={`/item/${id}`}>
                        <img className="imagenes" src={img} alt="*"></img>
                    </Link>
               </div>
               <div className="div--info">
                     <p className="tarjeta--info">{description}</p>           
               </div>
            </div>
       
    )
}
export default Item