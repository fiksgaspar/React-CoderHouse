import React, { useContext, useState, useEffect } from 'react'

export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

export function CartProvider ({children}){

    const [cart, setCart] = useState([])

    useEffect(()=>{

    },[cart])

    const estaEnElCarrito=(id)=>{
        const EnElCarrito = cart.find( x => x.id === id);
          if(EnElCarrito !== undefined){
            return true;
          }
    
        return false;   
        }
        
    const sumarYaAgregado = (datos, count) =>{
        const filtro = [...cart]
        filtro.forEach( i => {
            if(i.id === datos.id){
               i.cantidad = i.cantidad + count
            }
        })
        setCart(filtro)
    }
    
    const addItems = (count, datos) => {
     
        preciototal()

        if(estaEnElCarrito(datos.id)){
            sumarYaAgregado(datos, count)
        }else{
            setCart([...cart, {...datos, cantidad: count}])    
        }
     }
    
    function preciototal (){
        const precioTotal = cart.reduce((a,b) => (a + (b.price * b.cantidad)),0)

        return precioTotal
    }

    function mostrarUnidades (){
        const unidad = cart.reduce((a,b) => (a + b.cantidad),0)
        return unidad
    }

    const  removeItem = (item) => {
         const itemRemove = cart.filter( x => x.id !== item)
         setCart(itemRemove)
        console.log(item)
    }

    const clearItems = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, addItems, removeItem, clearItems, preciototal, mostrarUnidades }}>
          {children}
        </CartContext.Provider>
      );
}