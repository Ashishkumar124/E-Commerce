import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = cartItems.reduce((acc, item) => acc + item.attributes.quantity, 0);
        setCartCount(count);

        let subTotal = cartItems.reduce((acc, item) => acc + item.attributes.price * item.attributes.quantity, 0);
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        setCartItems(prevCartItems => {
            const existingItemIndex = prevCartItems.findIndex(item => item.id === product.id);
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[existingItemIndex].attributes.quantity += quantity;
                return updatedCartItems;
            } else {
                return [...prevCartItems, { ...product, attributes: { ...product.attributes, quantity } }];
            }
        });
    };

    const handleRemoveFromCart = (product) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== product.id));
    };

    const handleCartProductQuantity = (type, product) => {
        setCartItems(prevCartItems => {
            const updatedCartItems = [...prevCartItems];
            const index = updatedCartItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                if (type === "inc") {
                    updatedCartItems[index].attributes.quantity += 1;
                } else if (type === "dec" && updatedCartItems[index].attributes.quantity > 1) {
                    updatedCartItems[index].attributes.quantity -= 1;
                }
            }
            return updatedCartItems;
        });
    };

    return (
        <Context.Provider
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                cartItems,
                setCartItems,
                cartCount,
                setCartCount,
                cartSubTotal,
                setCartSubTotal,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartProductQuantity,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
