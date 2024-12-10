import { React } from 'react';
import { createPortal } from 'react-dom';

function CartBasket() {
  return (
    <div className='cart-basket fixed top-[80px]
     bg-white  w-full max-w-[350px]
       py-3 z-10 left-[50%] translate-x-[-50%]
       rounded-md'>

      <div className='text-black px-3 
        font-semibold pb-5 border-b-1 
       border-b-grayish-blue'>
         Cart
      </div>
    </div>
  )
}

export { CartBasket };