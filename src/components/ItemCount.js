import { useState} from 'react';

const ItemCount = () =>{

    //let cantidad = 0;
    const [cantidad, setCantidad] = useState(1);

    const increment = () => {        
        if (cantidad < 5){
            setCantidad(cantidad+1) ;  
        }    
    }
    

    const decrease = () => {
        if (cantidad > 1){
            setCantidad(cantidad-1) ;
        }
    }

    return (
        <>
            <div className="ItemCount">                
                <button className="btn btn-warning" onClick={decrease}>-</button>
                <p>{cantidad} items</p>
                <button className="btn btn-warning" onClick={increment}>+</button>
            </div>
        </>
    );
}

export default ItemCount;