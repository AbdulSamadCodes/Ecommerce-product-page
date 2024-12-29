import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { createContext } from 'react';

import { useToggle } from '/src/hooks/useToggle.js';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [isCartVisible, toggleCartVisible] = useToggle(false);
  const [cartItems, setCartItems] = useState([]);
  
  const value = {
    isCartVisible: isCartVisible,
    toggleCartVisible: toggleCartVisible,
    cartItems: cartItems,
    setCartItems: setCartItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider >
  );
}

export { CartContext, CartContextProvider };