import { useState} from 'react';

export const ItemCount = (parametro) =>{


    
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

    const agregar = () => {
        parametro.addItem(cantidad);
        setCantidad(1);
    }

        return (
            <>
                <div className="ItemCount"> 
                    <div className="ItemCountB">                
                        <button className="btn btn-warning btn-lg" onClick={decrease}>-</button>
                        <button className="btn btn-warning btn-lg" onClick={agregar}>Añadir al carrito {cantidad} unidades</button>
                        <button className="btn btn-warning btn-lg" onClick={increment}>+</button>
                    </div>                
                </div>
            </>
        );
    
}

