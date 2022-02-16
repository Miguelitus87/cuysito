import { ItemCount } from "./ItemCount";


export const ItemDetail = (item) =>{



    const onAdd = ()=> {
                
    }


    return (
        <>            
            <div className="ItemDetail">
                <div>
                        
                        <h3>{item.title}</h3>
                        <img src={item.pictureURL} alt={item.title} />                        
                        <p>Descripcion: {item.description}</p>
                        <button className="btn btn-warning" >Ver Detalle</button>               
                        <p>Precio: ${item.price}</p>    

                        <ItemCount stock={5} initial={1} addItem={onAdd}/>    
                        
                </div>        
            </div>
        </>
    );

}