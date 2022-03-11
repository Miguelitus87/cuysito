import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const ItemCarrito = (ItemCarrito) =>{
    const cartList = useContext(CartContext);
    return (
        <>
            <div className="ItemCarrito">
                <img src={ItemCarrito.pictureURL} alt={ItemCarrito.title} width="60" height="75"/>                        
                <h3>{ItemCarrito.title}</h3>                
                <p>Descripcion: {ItemCarrito.description}</p>                
                <p>Precio: ${ItemCarrito.price}</p>  
                <button className="btn btn-warning btn-lg" onClick={()=>cartList.removeItem()}>Remover</button>
            </div>
            <hr></hr>                                         
        </>
    );
}

/*
<button onClick={removeItem()}>Remover</button>
<button onClick={checkout}>checkout</button>
*/