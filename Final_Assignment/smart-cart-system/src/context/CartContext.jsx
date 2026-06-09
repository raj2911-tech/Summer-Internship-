import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const storedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(storedCart ? JSON.parse(storedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const item = cart.find((p) => p.id === product.id);

    if (item) {
      const updatedCart = cart.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            qty: p.qty < 10 ? p.qty + 1 : p.qty,
          };
        }
        return p;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increment = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty < 10 ? item.qty + 1 : item.qty,
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const decrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty > 1 ? item.qty - 1 : item.qty,
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};