import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './pageError.css'

const PageError = ({mensaje = 'Pagina no encontrada, busca otra ruta'}) => {
    const {id} = useParams()

    useEffect(() => {
      console.log(id)
    }, [id])
    
    
    return (
        <div className="container">
          <div className="row notFound">
            <h2><span className='not-found'>{id}</span> {mensaje}</h2>
            <img className="foto-error" src="https://res.cloudinary.com/gpope/image/upload/v1622464730/NewCloset-React/404-error-not-found-1_srqkrh.png" alt="error404"/>
           </div> 
        </div>
    )
}
export default PageError;