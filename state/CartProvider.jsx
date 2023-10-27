import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
});

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(() => {
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
  }, []);

  return (
    <CartContext.Provider
      value={{ isOpen, setIsOpen, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartProvider;
