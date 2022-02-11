import { useState} from 'react';

const ItemCount = (parametros) =>{

    //let cantidad = 0;
    const [cantidad, setCantidad] = useState(parametros.initial);

    const increment = () => {        
        if (cantidad < parametros.stock){

            setCantidad(cantidad+1) ;  
            
        }    
    }
    
    const decrease = () => {
        if (cantidad > parametros.initial){
            setCantidad(cantidad-1) ;
        }
    }

    const addItem = () => {
        alert(`agregaste la cantidad de: ${cantidad}`);

        
    }

    return (
        <>
            <div className="ItemCount"> 
                <div className="ItemCountB">  
                    <p>Producto</p>
                </div>
                <div className="ItemCountB">                
                    <button className="btn btn-warning" onClick={decrease}>-</button>
                    <p>Cantidad: {cantidad}</p>
                    <button className="btn btn-warning" onClick={increment}>+</button>
                </div>
                <div className="ItemCountB">
                    <button className="btn btn-warning" onClick={addItem}>Añadir al carrito</button>
                </div>
            </div>
        </>
    );
}

export default ItemCount;