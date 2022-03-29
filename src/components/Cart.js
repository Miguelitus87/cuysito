import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ItemCarrito } from "../components/ItemCarrito"
export const Cart = () =>{

    const cartList = useContext(CartContext);




    return (
        <>            
            <div className="Cart">
            <h1>CARRITO DE COMPRAS</h1>
                
                <div>
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
            </div>
            <div>    
                <button 
                    className="btn btn-warning btn-lg" 
                    onClick={()=>cartList.checkout()} >checkout
                </button>
                
                <Link to={'/'}><button className="btn btn-warning btn-lg" >Volver al Inicio</button></Link> 
            </div>
        </>
    )
}                
