import { React } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx';

function CartBasketCount() {
  const { cartItems  } = useContext(CartContext);

  return (
    <span className='absolute top-[-8px]  right-[-4px]
     bg-orange-primary 
      text-white font-bold text-[10px] 
      py-[0.1px] px-[8px] rounded-lg'>
      { cartItems.length }
    </span>
  )
}

export { CartBasketCount };