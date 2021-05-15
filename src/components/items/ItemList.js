import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <>
        
            {productos.map((dato)=>
                    <Item key={dato.id} img={dato.imag} title={dato.title} description={dato.description} price={dato.price} stock={dato.stockActual} id={dato.id} />
                )}
        
        
        </>
    )
}

export default ItemList
