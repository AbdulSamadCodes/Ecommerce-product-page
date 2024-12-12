import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartProductsCount, setCartProductsCount,] = useState(0);

  const data = useMemo(() => {
    return {
      cartProductsCount: cartProductsCount,
      setCartProductsCount: setCartProductsCount,
    }
  }, [
    cartProductsCount]);

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider >
  );
}

export { CartContext, CartContextProvider };