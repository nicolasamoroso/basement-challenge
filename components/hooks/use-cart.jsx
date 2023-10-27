import { CartContext } from "@/state/CartProvider";
import { useState, useContext } from "react";

export function useCart() {
  const { isOpen, setIsOpen, cartItems, setCartItems } =
    useContext(CartContext);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.product.id === product.id
      );

      let newCartItems;
      if (existingItem) {
        incrementCount(product.id, 1);
        newCartItems = prevCartItems;
      } else newCartItems = [...prevCartItems, { product, count: 1 }];

      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter(
        (item) => item.product.id !== productId
      );
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const incrementCount = (productId, count) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.map((item) => {
        if (item.product.id === productId) {
          const newCount = item.count + count;
          return { ...item, count: newCount };
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const decrementCount = (productId, count) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.map((item) => {
        if (item.product.id === productId) {
          const newCount = item.count - count;
          if (newCount === 0) removeFromCart(productId);
          else {
            return { ...item, count: newCount };
          }
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  return {
    cartItems,
    addToCart,
    isOpen,
    setIsOpen,
    setCartItems,
    removeFromCart,
    incrementCount,
    decrementCount,
  };
}

export function useHoveredProducts() {
  const [hoveredProducts, setHoveredProducts] = useState({});

  const handleMouseEnter = (productId) => {
    setHoveredProducts((prevHoveredProducts) => ({
      ...prevHoveredProducts,
      [productId]: true,
    }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredProducts((prevHoveredProducts) => ({
      ...prevHoveredProducts,
      [productId]: false,
    }));
  };

  return { hoveredProducts, handleMouseEnter, handleMouseLeave };
}
