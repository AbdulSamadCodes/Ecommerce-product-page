import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { createContext } from 'react';

import { useToggle } from '/src/hooks/useToggle.js';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartProductsCount, setCartProductsCount,] = useState(0);
  const [isCartVisible, handleCartVisible] = useToggle(false);

  const data = useMemo(() => {
    return {
      cartProductsCount: cartProductsCount,
      setCartProductsCount: setCartProductsCount,
      isCartVisible: isCartVisible,
      handleCartVisible: handleCartVisible
    }
  }, [
    cartProductsCount, isCartVisible]);

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider >
  );
}

export { CartContext, CartContextProvider };