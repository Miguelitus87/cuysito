import React from "react";
//import Item from "./Item";


const ItemList = (items) =>{

        return (
                <>
                <div className="CuadroProducto" >
                    <div>
                        
                        <h3>{items.title}</h3>
                        <img src={items.pictureURL} alt={items.title} />                        
                        <p>Descripcion: {items.description}</p>
                        <button className="btn btn-warning">Ver Detalle</button>               
                        <p>Precio: ${items.price}</p>    
                    </div>
                </div>
                </>
        );
    
}

export default ItemList


