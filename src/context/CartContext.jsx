/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const toggleFavourite = (product) => {
    setFavourites((prevFavourites) => {
      const isFavourite = prevFavourites.some(
        (item) => item._id === product._id
      );
      if (isFavourite) {
        return prevFavourites.filter((item) => item._id !== product._id);
      } else {
        return [...prevFavourites, product];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, favourites, toggleFavourite }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
