import { ItemCount} from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState} from 'react';
import { CartContext } from "../context/CartContext";

export const ItemDetail = (item) =>{
    
    const [stock, setStock] = useState(1);
    const cartList = useContext(CartContext);
    

    const onAdd = (id, quantity) => {              
        setStock(quantity);       
        cartList.addItem(id, quantity);

    }
    
    
    return (
        <>            
            
            <div className="ItemDetail">
                <div>                        
                        <img src={item.pictureURL} alt={item.title} />                                                             
                </div>        
                <div>
                        <h3>{item.title}</h3>
                        
                        <p>{item.description}</p>                        
                        <p>Precio: ${item.price} pesos</p>    

                        <ItemCount stock={item.stock} initial={stock} onAdd={onAdd}/>    

                        <Link to={'/cart'}><button className="btn btn-warning btn-lg" >Terminar compra / Ir al Carrito</button></Link>
                        <hr/>
                        <Link to={'/'}><button className="btn btn-warning btn-lg" >Volver al Inicio</button></Link>   
                
                
                </div>
            </div>
        </>
    );

}