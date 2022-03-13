import React from "react";
import { Item } from "./Item";


export const ItemList = (DbItems) =>{


        return (
                <>
                <div className="ItemList" >
                {DbItems.items.map(item =>
                            <Item                          
                                id={item.id}    
                                key={item.id}                            
                                title={item.title} 
                                description={item.description} 
                                price={item.price} 
                                pictureURL={item.pictureURL}
                            />)}                 
                </div>
                </>
        )
    
}

