import React from 'react'
import ItemDetailComp from './ItemDetailComp'

const ItemDetails = ({item, onAdd, cambioBoton}) => {
    return (
       <>
            {item && item.map((dato)=>
            <div key={dato.id} >
                <ItemDetailComp cambioBoton={cambioBoton}  img={dato.imag} title={dato.title} description={dato.description} price={dato.price} stock={dato.stockActual} onAdd={onAdd}/>
            </div>
            )}
       </>

        
    )
}

export default ItemDetails
