import React, {useState, useEffect} from 'react'
import {useParams } from 'react-router-dom';
import ItemDetailComp from '../components/items/ItemDetailComp';
// import ItemDetails from '../components/items/ItemDetails'
import { useCartContext } from '../Context/CartContext';
import { getFirestore } from '../firebase';
import './detail.css'


const ItemDetailContainer = () => {
   
    const [item, setItem] = useState({})
    const {id} = useParams()
    const {addItems} = useCartContext()
    const [cambioBoton, setCambioBoton] = useState(true)

    useEffect(() => {
        console.log(item)
        const db = getFirestore()

        const itemCollection = db.collection("items")

        const itemDetail = itemCollection.doc(id)

        itemDetail.get().then((doc)=>{

            setItem({id: doc.id, ...doc.data()})

        }).catch((err)=> console.log('ocurrio un error', err))
      
        .finally(()=> console.log('La carga finalizo'))
  
    },[id])
    console.log(item)

    const onAdd = (count) => {
        addItems(count, item)
        setCambioBoton(!cambioBoton)
    }


    return (
        <>
        <div>
            {item != {} ? <ItemDetailComp item={item} onAdd={onAdd} cambioBoton={cambioBoton}/>: <img className="loader" src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif"></img> }  
                 
        </div>
        </>
    )   
}

export default ItemDetailContainer
