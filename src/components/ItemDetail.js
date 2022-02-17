import { ItemCount } from "./ItemCount";

import { Link } from "react-router-dom";


export const ItemDetail = (item) =>{

    {/*const [cantidad, setCantidad] = useState(0);*/}
    
    const onAdd = (data)=> {
        {/*setCantidad(data);*/}
        alert(`se agrego al carrito esta cantidad de items `+data)
        
    }

    return (
        <>            
            <div className="ItemDetail">
                <div>                        

                        <img src={item.pictureURL} alt={item.title} />                                                             
                </div>        
                <div>
                        <h3>{item.title}</h3>
                        
                        <p>{item.description}</p>                        
                        <p>Precio: ${item.price} pesos</p>    
                        <ItemCount stock={5} initial={1} addItem={onAdd}/>    
                        <Link to={'/'}><button className="btn btn-warning btn-lg" >Volver al Inicio</button></Link>   
                </div>
            </div>
        </>
    );

}