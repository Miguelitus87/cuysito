import { useEffect, useState } from "react";
import { database, getList } from "../database";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () =>{

    const[items,setItems]= useState([]);

    useEffect( async() => {
        try{
            const data = await getList(database, 2000);
            setItems(data)
        
        } catch(e) {
            console.log(e)
        }
    },);


    return (
        <>            
            <div className="ItemDetailContainer">
                <ItemDetail key={1}/>

            </div>
        </>
    );

}