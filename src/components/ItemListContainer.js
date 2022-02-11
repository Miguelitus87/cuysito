import ItemList from "./ItemList";

const ItemListContainer = () =>{

    const productos = [
        {
            id: 0,
            title: "Camiseta",
            description: "Camiseta Algodon",
            price: 10,
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
        },
        {
            id: 1,
            title: "Pantalon",
            description: "Pantalones Oxford",            
            price: 10,
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
        },
        {
            id: 2,
            title: "Sombrero",
            description: "para el sol",            
            price: 10,
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
        },
        {
            id: 3,
            title: "Remera",
            description: "de algodon",            
            price: 10,
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
        },

    ];

    
    

    const promesa = (time, data) => {
        return new Promise((resolve, reject) => {
            if (productos.length > 1 ) {
                setTimeout(() => {resolve(data)}, time);
            } else {
                reject("Error")
            }
        });
    }

    promesa(2000, productos.map(ItemList))
    .then(data => {console.log(data)})
    .catch(error => console.log(error))

    return (
        <>            
            <div className="ItemListContainer">
                {
                    
                    productos.map(ItemList)
                }
                    <ItemList items={productos} />                                           
                
            </div>
        </>
    );
}

export default ItemListContainer;