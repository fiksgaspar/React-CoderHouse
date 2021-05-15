import React from 'react'
import './contador.css'

const Contador = ({id, stockLater, stockTotal, sumar, restar, count, onAdd}) => {
    
    return (
        <>
            <div id={id} className="contador--all">
                <div className="contador-col">
                    <div className="contador--cantDisp">Cantidad disponible : {stockTotal}</div>
                    <div className="botonera">
                        <button onClick={restar}> - </button>    
                        <p>{stockLater}</p>
                        <button onClick={sumar}> + </button>
                    </div>
                    <div >
                        <button className="boton--añadir" onClick={()=> onAdd(count)}>Añadir al Carrito</button>
                    </div>
                </div>

            </div>

        </>
    )   

}

export default Contador
