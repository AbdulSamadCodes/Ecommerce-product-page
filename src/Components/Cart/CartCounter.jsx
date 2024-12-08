import { React } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { cartContext } from '/src/contexts/CartContext.jsx';

function CartCounter() {
  const { cartProductsCount } = useContext(cartContext);

  return (
    cartProductsCount > 0 &&
    <span className='absolute bg-orange-primary 
      text-white font-semibold text-[8px] p-1'>
      {cartProductsCount}
    </span>
  )
}

export { CartCounter };