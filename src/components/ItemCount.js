import { useState, React} from 'react';
import { useParams } from 'react-router-dom';

export const ItemCount = (parametro) =>{

       
    const {id} = useParams(); 
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
    

    return (
        <>
            <div className="ItemCount"> 
                <div className="ItemCountB">                
                    <button className="btn btn-warning btn-lg" 
                        onClick={decrease}>-</button>
                    <button className="btn btn-warning btn-lg" 
                        onClick={ ()=>{ setCantidad(1); parametro.onAdd(id ,cantidad); }}>Añadir al carrito {cantidad} unidades</button>
                    <button className="btn btn-warning btn-lg" 
                        onClick={increment}>+</button>
                </div>                
            </div>
        </>
    );    
    
}

