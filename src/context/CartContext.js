import {useState, createContext} from "react";
import  db  from "../utils/firebase";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    
    const [cartList, setCartList] = useState([]);
    
    const isInCart = (idProduct) => {
        return cartList.find(
            (item) => item.id === idProduct
        ) ? true : false;
    }

    const addItem = (item, quantity) => {

        console.log('Se ejecuta AddItem en cartContext');
        
        console.log(item);
        console.log(quantity);

        if (isInCart(item)) {
            console.log('Condicion If');
            for (const products of cartList) {
                if (products.id === item) {
                        products.stock += quantity;
                }
            }
            setCartList([...cartList]);
        } else {
            console.log('Condicion else');
            setCartList([
                ...cartList,   //spread: agrega al contenido existente
                {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    pictureURL: item.pictureURL 
                }
            ]);        
        }        
    };

    const removeItem = (idProduct) => {
        setCartList(cartList.filter(item => (item.id !== idProduct)));
    }

    const checkout = () => {
        console.log('se ejecuta checkout');
        setCartList([]);
    }




    return (    
        <CartContext.Provider value={{cartList, addItem, removeItem, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;