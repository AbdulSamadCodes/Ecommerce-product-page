import { React } from 'react';
import { useContext } from 'react';
import { CartContext, CartContextProvider } from '/src/contexts/CartContext.jsx';

function CartBasket( {isOpen} ) {
  const { cartProductsCount , isCartVisible } = useContext(CartContext);
  
  return isCartVisible && (
    <div className='cart-basket absolute 
       top-[90px] z-10 bg-white w-full 
       max-w-[330px] left-[50%] 
       translate-x-[-50%] rounded-md'>

      <div className='text-black py-3 
        px-3 font-semibold pb-5 border-b-1 
       border-b-grayish-blue'>
        Cart
      </div>

      <div className='py-16 px-3 
        text-[14px]'>
        {cartProductsCount === 0 && 
        <p className='text-dark-grayish-blue 
          font-bold text-center'>Your cart is empty</p>}

      </div>
    </div>
  )
}

export { CartBasket };