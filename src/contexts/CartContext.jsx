import { React } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

function CartContextProvider( {children} ) {
  const [ cartProductsCount , setCartProductsCount ] = useState(0);

  return (
    <CartContext.Provider value = { {cartProductsCount , setCartProductsCount} }> 
        {children}
    </CartContext.Provider >
  );
}

export { CartContext , CartContextProvider };