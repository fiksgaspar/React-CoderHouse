import React, {useState, useEffect} from 'react'
import ItemList from '../components/items/ItemList'
import {useParams} from 'react-router-dom'



import {getFirestore} from '../firebase'


export const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()

        let filterCollection = '';
        
        if(id){
            filterCollection = db.collection("items").where('category', '==', id)
        } else {
            filterCollection = db.collection("items")
        }

        filterCollection.get().then((res)=>{
            const productos = res.docs.map((doc)=>{
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            setDatos(productos)
        }).catch((err)=>console.log('ocurrio un error', err))
        .finally(()=>console.log('carga finalizada'))

    }, [id])


            //         imag: "https://res.cloudinary.com/gpope/image/upload/v1619033847/RemeraNegra_ikmkcq.jpg",
            //         description: "Remera con dedos de calavera color negro",
            //         id: '1',
            //         title:'Remera Negra',
            //         price: '400',
            //         stockActual: '8',
            //         category: 'Remeras'

    return (  
        <div  className="grilla--productos">
          {datos === 0 ? <img className="loader" src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif" alt="loader"></img> : <ItemList productos={datos}/> }
        </div>
          
        )
    }