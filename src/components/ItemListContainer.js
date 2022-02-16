import { ItemList } from "./ItemList";
import { database, getList } from "../database";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () =>{


    const {idCategoria} = useParams();

    const[DbItems,setDbItems]= useState([]); 

    useEffect( async() => {
        if(idCategoria === undefined){

            try{
                const data = await getList(database, 2000);
                setDbItems(data)
            
            } catch(error) {
                console.log(error)
            }

        }else{

            try{
                const data = await getList(database.filter(item => item.idCategoria === idCategoria), 2000);
                setDbItems(data)
            
            } catch(error) {
                console.log(error)
            }

        }

    },[idCategoria]);

    {/*
    getList(DbItems, 2000)
    .then((res)=> setItems(res))
    .catch((error)=> console.log(error));
    */}

    {/*
    useEffect(() => {
        getList(DbItems, 2000)
            .then(result => setDatos(result))
            .catch(error => console.log(error))

    }, []);
    */}
    
    return (
        <>            
            <div className="ItemListContainer">
                
                {                    
                    DbItems.map((item, i) => (
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

