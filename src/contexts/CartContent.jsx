import { React } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const cartContext = createContext();

function cartContextProvider( {children} ) {
  const [ cartProductsCount , setcartProductsCount ] = useState(0);

  return (
    <cartContext.Provider value = { {cartProductsCount , setcartProductsCount} }> 
        {children}
    <cartContext.Provider />
  );
}

export { cartContext , cartContextProvider };