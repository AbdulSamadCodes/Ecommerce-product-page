import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx'

import iconPlus from '/src/assets/images/icon-plus.svg';
import iconMinus from '/src/assets/images/icon-minus.svg';
import iconCartBlack from '/src/assets/images/icon-cart-black.svg';

import { PrimaryButton } from '/src/Components/PrimaryButton.jsx';

function CartCounter() {
  const { cartItems , setCartItems } = useContext(CartContext);     

  return (
    <div className='flex items-center 
     gap-6 md:gap-4 flex-wrap'>

      <div className='flex items-center justify-between 
       gap-9 py-2 px-3 w-full xs:w-fit
       bg-light-grayish-blue rounded-md'>

        <button className='counter__btn 
          hover:opacity-70'>
          <img src={iconMinus} />
        </button>

        <p className='font-bold'>0</p>

        <button className='counter__btn 
          hover:opacity-70 '>
          <img src={iconPlus} />
        </button>
      </div>

      <PrimaryButton 
        icon={iconCartBlack} 
        text={'Add to cart'}
        landscapeWidth={'fit'} 
        />
    </div>
  )
}

export { CartCounter };