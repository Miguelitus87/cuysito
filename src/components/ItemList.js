import { Item } from "./Item";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



export const ItemList = (item) =>{


        return (
                <>
                <div className="CuadroProducto" >
                    <div>
                        
                        <h3>{item.title}</h3>
                        <img src={item.pictureURL} alt={item.title} />                        
                        <p>Descripcion: {item.description}</p>
                        <Link to="/item"><button className="btn btn-warning" >Ver Detalle</button></Link>               
                        <p>Precio: ${item.price}</p>    

                    </div>                    
                </div>
                </>
        )
    
}




