import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import  db  from "../utils/firebase";

export const ItemListContainer = () =>{

    const[DbItems,setDbItems]= useState([]); 
    
    const {idCategoria} = useParams();

    useEffect( async() => {

        if(idCategoria === undefined){

            const firestoreFetch = async () => {
                const querySnapshot = await getDocs(collection(db, "products"));
                return querySnapshot.docs.map( document => ({
                    id: document.id,
                    ...document.data()
                }))        
            }
            firestoreFetch()
            .then(result => setDbItems(result))
            .catch(error => console.log(error));

        }else{

            const firestoreFetch = async () => {
                
                const querySnapshot = await getDocs(query(collection(db, "products"), where('idCategoria', "==", idCategoria)));                

                return querySnapshot.docs.map( document => ({
                    id: document.id,
                    ...document.data()
                }))        
            }
            firestoreFetch()
            .then(result => setDbItems(result))
            .catch(error => console.log(error));
            
        }
        
    },[idCategoria]);
        
    return (
        <>            
            <div className="ItemListContainer">
                <h3>PRODUCTOS DISPONIBLES</h3>
                <ItemList items={DbItems} /> 
            </div>
        </>
    );
}

