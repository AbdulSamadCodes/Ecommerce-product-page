import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx';


import iconPlus from '/src/assets/images/icon-plus.svg';
import iconMinus from '/src/assets/images/icon-minus.svg';
import iconCartBlack from '/src/assets/images/icon-cart-black.svg';

import { PrimaryButton } from '/src/Components/PrimaryButton.jsx';

function CartCounter() {
  const { cartProductsCount, setCartProductsCount } = useContext(CartContext);

  const incrementProductsCount = () => {
    setCartProductsCount(count => count + 1);
  }

  const decrementProductsCount = () => {
    setCartProductsCount(count => count <= 0 ? 0 : count - 1);
  }

  return (
    <div className='flex items-center 
     gap-6 md:gap-4 flex-wrap'>

      <div className='flex items-center justify-between 
       gap-9 py-2 px-3 w-full xs:w-fit
       bg-light-grayish-blue rounded-md'>

        <button className='counter__btn'
          onClick={decrementProductsCount}>
          <img src={iconMinus} />
        </button>

        <p className='font-bold'>{cartProductsCount}</p>

        <button className='counter__btn'
          onClick={incrementProductsCount}>
          <img src={iconPlus} />
        </button>
      </div>

      <PrimaryButton icon={iconCartBlack} />
    </div>
  )
}

export { CartCounter };