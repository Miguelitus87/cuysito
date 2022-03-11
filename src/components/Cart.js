import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCarrito } from "./ItemCarrito";
import { database } from "../database";
import { CartContext } from "../context/CartContext";

export const Cart = () =>{

const cartList = useContext(CartContext);

    return (
        <>            
            <div className="Cart">
                <h1>CARRITO DE COMPRAS</h1>
                
                <div>
                {/* se va a mapear CartList y no database */}
                {                    
                    
                    cartList.cartList.map((item) => (
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
                    onClick={()=>cartList.checkout()} >checkout
                </button>
                <button 
                    className="btn btn-warning btn-lg" 
                    onClick={()=>console.log(cartList.cartList)} >TEST
                </button>
                <Link to={'/'}><button className="btn btn-warning btn-lg" >Volver al Inicio</button></Link> 
            </div>
        </>
    );

}