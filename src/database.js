export const database = [
    {
        id: 0,
        title: "Remera A",
        description: "Algodon",
        price: 10,
        idCategoria: 'remeras',
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },
    {
        id: 1,
        title: "Remera B",
        description: "Modal",            
        price: 10,
        idCategoria: 'remeras',
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },
    {
        id: 2,
        title: "Camisa A",
        description: "algodon",            
        price: 10,
        idCategoria: 'camisas',
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },
    {
        id: 3,
        title: "Camisa B",
        description: "algodon",            
        price: 10,
        idCategoria: 'camisas',
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },
    {
        id: 4,
        title: "Musculosa A",
        description: "algodon",            
        price: 10,
        idCategoria: 'musculosas',
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },
    {
        id: 5,
        title: "Musculosa B",
        description: "modal",            
        price: 10,
        idCategoria: 'musculosas',
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },
    {
        id: 6,
        title: "Pantalon A",
        description: "de ripstop",            
        price: 10,
        idCategoria: 'pantalones',
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },
    {
        id: 7,
        title: "Pantalon B",
        description: "de ripstop",            
        price: 10,
        idCategoria: 'pantalones',
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },

];

export const getList = (productos, timeout) => new Promise((res) =>
    setTimeout(() => {
        res(productos)
    }, timeout)
);




