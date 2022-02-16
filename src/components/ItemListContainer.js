import { ItemList } from "./ItemList";
import { productos, getList } from "../database";
import { useEffect, useState } from "react";

export const ItemListContainer = () =>{

    const[items,setItems]= useState([]);

    {/*
    getList(productos, 2000)
    .then((res)=> setItems(res))
    .catch((e)=> console.log(e));
    */}

    useEffect( async() => {
        try{
            const data = await getList(productos, 2000);
            setItems(data)
        
        } catch(e) {
            console.log(e)
        }
    },);


    
    return (
        <>            
            <div className="ItemListContainer">
                
                {                    
                    items.map((item, i) => (
                        <ItemList 
                            key={i} 
                            title={item.title} 
                            description={item.description} 
                            price={item.price} 
                            pictureURL={item.pictureURL}/>
                        )
                    )
                }


            </div>
        </>
    );
}

