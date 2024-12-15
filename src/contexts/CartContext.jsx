import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { createContext } from 'react';

import { useToggle } from '/src/hooks/useToggle.js';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [isCartVisible, handleCartVisible] = useToggle(false);

  const data = useMemo(() => {
    return {
      isCartVisible: isCartVisible,
      handleCartVisible: handleCartVisible
    }
  }, [ isCartVisible]);

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider >
  );
}

export { CartContext, CartContextProvider };