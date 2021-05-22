import React, {useState, useEffect} from 'react';
import Contador from './Contador';



const CountContainer = ({stock, onAdd, id}) => { 
 
    const [stockTotal, setStockTotal] = useState(stock)
    const [stockLater, setStockLater] = useState(0)
    const count = stockLater;
   
    useEffect(() => {
      console.log(stockLater)
    }, [stockTotal,stockLater])
    
    
    const sumar = () => {
      
       if(stockTotal > 0){
      setStockLater ( stockLater + 1 );
      setStockTotal ( stockTotal - 1 );
      }
    }
    const restar =()=>{
      if(stockLater === 0){

        setStockLater(0);
      }
      else if(stockTotal >= 0 ){
      setStockLater ( stockLater - 1);
      setStockTotal (stockTotal + 1)

      }
    }
   
    return (
        <Contador id={id} onAdd={onAdd} stockLater={stockLater} stockTotal={stockTotal} sumar={sumar} restar={restar} count={count}/>
    )
}
export default CountContainer;