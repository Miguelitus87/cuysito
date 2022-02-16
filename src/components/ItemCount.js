import { useState} from 'react';

export const ItemCount = (parametro, onAdd) =>{

    const [cantidad, setCantidad] = useState(parametro.initial);

    const increment = () => {        
        if (cantidad < parametro.stock){
            setCantidad(cantidad+1) ;              
        }    
    }
    
    const decrease = () => {
        if (cantidad > parametro.initial){
            setCantidad(cantidad-1) ;
        }
    }

    onAdd = (e) => {
        e = cantidad;
        alert(`llamada a funcion addItem `+e)       
    } 


        return (
            <>
                <div className="ItemCount"> 
                    <div className="ItemCountB">  
                    </div>
                    <div className="ItemCountB">                
                        <button className="btn btn-warning" onClick={decrease}>-</button>
                        <p>Cantidad: {cantidad}</p>
                        <button className="btn btn-warning" onClick={increment}>+</button>
                    </div>
                    <div className="ItemCountB">
                        <button className="btn btn-warning" onClick={onAdd}>Añadir al carrito</button>
                    </div>
                </div>
            </>
        );
    
}

