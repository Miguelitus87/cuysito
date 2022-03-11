import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCarrito } from "./ItemCarrito";
import { database } from "../database";
import { CartContext } from "../context/CartContext";

export const Cart = () =>{

const  ccontext = useContext(CartContext);

    return (
        <>            
            <div className="Cart">
                <h1>CARRITO DE COMPRAS</h1>
                <div>
                {/* se va a mapear CartList y no database */}
                {                    
                    
                    database.map((item) => (
                        <ItemCarrito 
                            key={item.id}                             
                            title={item.title} 
                            description={item.description} 
                            price={item.price} 
                            pictureURL={item.pictureURL}/>                                                                                            
                            
                        )
                    )
                }  

                </div>    
                <button 
                    className="btn btn-warning btn-lg" 
                    onClick={()=>ccontext.prueba()} >checkout
                </button>
                <Link to={'/'}><button className="btn btn-warning btn-lg" >Volver al Inicio</button></Link> 
            </div>
        </>
    );

}