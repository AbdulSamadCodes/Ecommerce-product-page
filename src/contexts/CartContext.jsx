import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { createContext } from 'react';

import { useToggle } from '/src/hooks/useToggle.js';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [isCartVisible, toggleCartVisible] = useToggle(false);
  const [cartItems , setCartItems]  = useState([]); 

  const data = useMemo(() => {
    return {
      isCartVisible: isCartVisible,
      toggleCartVisible: toggleCartVisible,
      cartItems : cartItems,
      setCartItems : setCartItems
    }
  }, [ isCartVisible]);

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider >
  );
}

export { CartContext, CartContextProvider };