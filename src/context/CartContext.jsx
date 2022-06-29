import { createContext,useEffect,useState } from "react";

const addCartItem = (cartItems,productToAdd) => {
    const existingItem = cartItems.find(
        (item) => item.id === productToAdd.id
    );

    if(existingItem){
        return cartItems.map((item) => item.id === productToAdd.id ? 
        {...item, quantity: item.quantity+1} :
        item
        )
    }

    return [...cartItems,{...productToAdd,quantity:1}];
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingItem = cartItems.find(
        (item) => item.id === productToRemove.id
    );

    if(existingItem.quantity === 1){
        return cartItems.filter((item) => item.id !== productToRemove.id)
    }

    return cartItems.map((item) => item.id === productToRemove.id ? 
        {...item, quantity: item.quantity-1} :
        item
    )

}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems:[],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount:0,
    total: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false) ;
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity ,0);
        setCartCount(newCartCount);
    },[cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total,cartItem)=> total + cartItem.quantity*cartItem.price ,0);
        setTotal(newCartTotal);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems,productToClear));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems,addItemToCart, cartCount,removeItemFromCart, clearItemFromCart,total}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}