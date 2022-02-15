export const productos = [
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
    {
        id: 4,
        title: "morral",
        description: "de ripstop",            
        price: 10,
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvnsviYgmB0i0y3dhVS5QbyzKuUWBJ9xKoQ&usqp=CAU",
    },

];

export const getList = (productos, timeout) => new Promise((res) =>
    setTimeout(() => {
        res(productos)
    }, timeout)
);




