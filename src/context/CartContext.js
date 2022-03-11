import {useState, createContext} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    
    const [CartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        console.log('Se ejecuta AddItem en cartContext');
        console.log(CartList);
        const isInCart = CartList.find((CartListItem) => CartListItem.id === item.id);
        if(isInCart) {
            console.log('Condicion isInCart');
            setCartList(
                CartList.map((itemId) => {
                    return { ...itemId, quantity: itemId.quantity + 1 };
                })
            );
            
        } else {
            console.log('Condicion else');
            setCartList([...CartList, item]);            
        }        
        
    };

    const removeItem = (id) => {
        setCartList(CartList.filter((itemId) => itemId.id !== id ));
    };

    const checkout = () => {
        console.log('se ejecuta checkout');
        setCartList([]);
    }

    const prueba = () => {
        alert('se ejecuta prueba');
        console.log('se ejecuta prueba');
        
    }

    return (    
        <CartContext.Provider value={{CartList, addItem, removeItem, checkout, prueba }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;