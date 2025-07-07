'use client'
import { useContext, createContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exists = cart.find((prod) => prod.id === item.id);
    if (exists) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return
    setCart(cart.map(item =>
        item.id === id
            ? { ...item, quantity: Math.min(quantity, item.stock) }
            : item
    ))
}

  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,getTotalItems,getTotalPrice,updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
};
