import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { database, getList } from "../database";
import { collection, getDoc, getDocs, query, where, doc, docSnap } from "firebase/firestore";
import  db  from "../utils/firebase";


export const ItemDetailContainer = () =>{

    const {id} = useParams(); 
    
    const[item,setItem]= useState([]); 

    useEffect( async() => {
        try{
            const data = await getList(database.filter(item => item.id === parseInt(id)), 100);
            setItem(data)
        
        } catch(error) {
            console.log(error)
        }
        console.log(item);
    },[id]);

    return (
        <>            
            <div className="ItemDetailContainer">                
                
                {                    
                    item.map((item) => (                        
                        <ItemDetail 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            price={item.price} 
                            pictureURL={item.pictureURL}
                            stock={item.stock}/>
                        )
                    )
                }
                
            </div>
        </>
    );

}




{/*
useEffect( async() => {
    try{
        const data = await getList(database.filter(item => item.id === parseInt(id)), 1);
        setDbItems(data)
    
    } catch(error) {
        console.log(error)
    }
},[id]);

*/}