import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { database, getList } from "../database";
import { collection, getDocs } from "firebase/firestore";
import  db  from "../utils/firebase";


export const ItemDetailContainer = () =>{

    const {id} = useParams(); 
    
    const[DbItems,setDbItems]= useState([]); 

    useEffect( async() => {
        try{
            const data = await getList(database.filter(item => item.id === parseInt(id)), 100);
            setDbItems(data)
        
        } catch(error) {
            console.log(error)
        }
    },[id]);

    return (
        <>            
            <div className="ItemDetailContainer">                
                
                {                    
                    DbItems.map((item) => (                        
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
    const firestoreFetch = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        
        const dataFromFirestore = querySnapshot.docs.map(item => ( {id: item.id, ...item.data()} ) ) 
        
        return dataFromFirestore;
    }
    firestoreFetch()
        .then(result => setDbItems(result))
        .catch(error => console.log(error));
},[DbItems]);
*/}