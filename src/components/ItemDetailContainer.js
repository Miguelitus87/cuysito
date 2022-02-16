import { useEffect, useState } from "react";
import { productos, getList } from "../database";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () =>{

    const[items,setItems]= useState([]);

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
            <div className="ItemDetailContainer">
                <ItemDetail />

            </div>
        </>
    );

}