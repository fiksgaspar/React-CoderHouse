import React, {useContext, useEffect, useState} from 'react'
import { useCartContext } from '../../Context/CartContext'
import { UserContext } from '../../Context/UserProvider'
import './checkout.css'
import GoogleSign from '../signin/GoogleSign'
import { Link, useHistory } from 'react-router-dom'
import Order from '../Order'

function Checkoutt({onNameChange, onSubmit, orderId, mensajeMail, isDisabled, status}) {
    const {clearItems, preciototal, mostrarUnidades} = useCartContext()
    const {user, inicioSesion} = useContext(UserContext)
    const [cambio, setCambio] = useState(false)

    
    useEffect(() => {
     
        if(user){
          setCambio(true)
        }
      }, [inicioSesion,user,cambio])


    return (
        <>
        {orderId ? <Order orderId={orderId} clearItems={clearItems}/>: 
        
        
        
        <div className="checkout-full">
        {!inicioSesion ?
            <div className="checkout-box">
                        <div className="finales">
                            <h2>Cantidad de Productos: {mostrarUnidades()}</h2>   
                            <br/>      
                            <h2>Total del pedido: ${preciototal()}</h2>
                        </div>

                <div className="form-usuario">
                    <div className="form-group">
                        <label  className="labell">Nombre y Apellido</label>
                        <input type="text" name="nombre" onChange={onNameChange} placeholder="Nombre y Apellido" required/>
                        </div>
                        <div className="form-group">
                        <label className="labell">Email</label>
                        <input type="text" name="email" onChange={onNameChange} placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                        <label className="labell">Reingrese su Email</label>
                        <input type="text" name="email2" onChange={onNameChange} placeholder="Email"   required/>
                        </div>
                        <div className="form-group">
                        <label className="labell">Telefono</label>
                        <input type="number" name="telefono" onChange={onNameChange} placeholder="Teléfono" required/>
                        </div>


                </div>
                <div className="form-google">
                    <GoogleSign/>
                </div>
            </div>
            : <div>
                <div className="termina-box">
                    <p className="Termina">Termina tu compra {cambio && user.displayName}</p>
                    <p className="termina-p">Tienes un total de $ {preciototal()} por {mostrarUnidades()} artículos.</p>
                </div>
              </div> }
        <div>
                    
            {mensajeMail && <div className="email-err"><b>{mensajeMail}</b></div>}

         </div> 
         <div className="footer">
              <Link to="/"><button type="button" className='btn-LogOut'>Cancelar</button></Link>
              <button className="btn-LogOut" type="button" disabled={isDisabled()} onClick={()=>onSubmit()}>Confirmar Compra</button>
            </div>



    </div>
        
        
        }

        {/* {orderId && <Order orderId={orderId} status={status} clearItems={clearItems}/>} */}
</>
    )

}

export default Checkoutt
