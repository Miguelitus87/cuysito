import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { database, getList } from "../database";
import { getDoc, doc } from "firebase/firestore";
import  db  from "../utils/firebase";

export const ItemDetailContainer = () =>{

    const[item, setItem] = useState({}); 
    const {id} = useParams();
    
    const queryById = async (idItem) => {        
        const docSnap = await getDoc(doc(db, "products", idItem));
        
        if (docSnap.exists()) {            
            return { id: idItem, ...docSnap.data() }
        } else {
            console.log('No se encontró el producto');
        }
    }
    
    useEffect(() => {
        queryById(id)
            .then(resultado => setItem(resultado))
            .catch(error => console.log(error))
    }, [id]);

    return (
        <>            
            <div className="ItemDetailContainer">
                <ItemDetail key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            price={item.price} 
                            pictureURL={item.pictureURL}
                            stock={item.stock}/>
            </div>
            </>
    );

}




{/*
    useEffect( async() => {
        try{
            const data = await getList(database.filter(item => item.id === parseInt(id)), 100);
            setItem(data)
        
        } catch(error) {
            console.log(error)
        }
        console.log(item);
    },[id]);

*/}