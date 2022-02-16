import React from "react";
import { useState } from "react";
import { Item } from "./Item";
import { ItemCount } from "./ItemCount";

export const ItemList = (item) =>{

    const [cantidad, setCantidad] = useState(0);
    
    const onAdd = (data)=> {
        setCantidad(data);
        alert(`se agreago al carrito `+data)
        
    }

        return (
                <>
                <div className="CuadroProducto" >
                    <div>
                        
                        <h3>{item.title}</h3>
                        <img src={item.pictureURL} alt={item.title} />                        
                        <p>Descripcion: {item.description}</p>
                        <button className="btn btn-warning" >Ver Detalle</button>               
                        <p>Precio: ${item.price}</p>    

                        <ItemCount stock={5} initial={1} addItem={onAdd}/>    
                        
                    </div>                    
                </div>
                </>
        )
    
}




