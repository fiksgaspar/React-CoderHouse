import React, {useState, useEffect} from 'react'
import {useParams } from 'react-router-dom';
import ItemDetails from '../components/items/ItemDetails'
import { useCartContext } from '../Context/CartContext';
import './detail.css'


const ItemDetailContainer = () => {
   
    const [item, setItem] = useState([])
    const {id} = useParams()
    const {addItems} = useCartContext()
    const [cambioBoton, setCambioBoton] = useState(true)


    useEffect(()=>{

        const getItem = () =>{
            return new Promise ((resolve,reject)=>{
                const catalogo = [
                    {
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619033847/RemeraNegra_ikmkcq.jpg",
                        description: "Remera con dedos de calavera color negro",
                        id: '1',
                        title:'Remera Negra',
                        price: '400',
                        stockActual: '8',
                        category: 'Remeras'
                    },
                    {
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619033847/RemeraLaundry_sbvg6a.jpg",
                        description: "Remera 100% algodon con imagen Laundry",
                        id: '2',
                        title:'Remera Laundry',
                        price: '600',
                        stockActual: '5',
                        category: 'Remeras'
                    },{
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619033847/RemeraDreamer_bj9un4.jpg",
                        description: "Remera frase Dreamer",
                        id: '3',
                        title:'Remera Dreamer',
                        price: '600',   
                        stockActual:'3',
                        category: 'Remeras'
                    },{
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619033847/Blanca_cq0bsn.jpg",
                        description: "Camisa Blanca",
                        id: '4',
                        title:'Camisa Blanca',
                        price: '1600',   
                        stockActual:'4',
                        category: 'Camisas'
                    },{
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619646398/NewCloset-React/Remeras/RemeraFaro_lrzorm.jpg",
                        description: "Remera con estampado de Faro",
                        id: '5',
                        title:'Remera Faro',
                        price: '600',   
                        stockActual:'6',
                        category: 'Remeras'
                    },{
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619646372/NewCloset-React/Pantalones/JeanAjustado_ykdxaz.jpg",
                        description: "Jean Slim-fit",
                        id: '6',
                        title:'Jean trendy',
                        price: '1600',   
                        stockActual:'3',
                        category: 'Pantalones'
                    },{
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619646369/NewCloset-React/Pantalones/JeanRoto_uifuxr.jpg",
                        description: "Jean desgastado en las rodillas",
                        id: '7',
                        title:'No-Jean',
                        price: '1400',   
                        stockActual:'4',
                        category: 'Pantalones'
                    },{
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619646357/NewCloset-React/Pantalones/JeanDesgastado_r31n6j.jpg",
                        description: "Jean Celeste Desgastado",
                        id: '8',
                        title:'Jean night',
                        price: '1400',   
                        stockActual:'6',
                        category: 'Pantalones'
                    },{
                        imag: "https://res.cloudinary.com/gpope/image/upload/v1619646348/NewCloset-React/Pantalones/JeanEstilo_y4gk0h.jpg",
                        description: "Jean Skater",
                        id: '9',
                        title:'Skater-jeans',
                        price: '1600',   
                        stockActual:'4',
                        category: 'Pantalones'
                    }
                ];

                setTimeout(()=>{
                    resolve(catalogo);
                },2000)
            })
        }
        getItem().then(dato => {

            const filtrado = dato.filter( x =>  x.id == id)

            
            setItem(filtrado)
        })

    },[id])

            
    const onAdd = (count) => {
        addItems(count, item[0])
        setCambioBoton(!cambioBoton)
    }


    return (
        <>
        <div>
            {item.length > 0 ? <ItemDetails item={item} onAdd={onAdd} cambioBoton={cambioBoton}/>: <img className="loader" src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif"></img> }  
                 
        </div>
        </>
    )   
}

export default ItemDetailContainer
