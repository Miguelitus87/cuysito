import { ItemCount } from "./ItemCount";
import { useState } from "react";


export const ItemDetail = (item) =>{

    {/*const [cantidad, setCantidad] = useState(0);*/}
    
    const onAdd = (data)=> {
        {/*setCantidad(data);*/}
        alert(`se agrego al carrito esta cantidad de items `+data)
        
    }

    return (
        <>            
            <div className="ItemDetail">
                <div>                        
                        <h3>{item.title}</h3>
                        <img src={item.pictureURL} alt={item.title} />                        
                        <p>Descripcion: {item.description}</p>                        
                        <p>Precio: ${item.price}</p>    
                        <ItemCount stock={5} initial={1} addItem={onAdd}/>    
                        
                </div>        
            </div>
        </>
    );

}