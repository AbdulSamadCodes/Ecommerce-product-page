import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx';

import iconPlus from '/src/assets/images/icon-plus.svg';
import iconMinus from '/src/assets/images/icon-minus.svg';
import iconCartBlack from '/src/assets/images/icon-cart-black.svg';

function CartCounter() {
  const { cartProductsCount, setCartProductsCount } = useContext(CartContext);

  const incrementProductsCount = () => {
    setCartProductsCount(cartProductsCount + 1);
  }

  const decrementProductsCount = () => {
    setCartProductsCount(cartProductsCount - 1);
  }

  return (
    <div className='flex items-center gap-3'>

      <div className='flex items-center gap-9 p-2
       bg-light-grayish-blue rounded-md'>

        <button className='counter__btn' onClick={decrementProductsCount}>
          <img src={iconMinus} />
        </button>

        <p className='font-bold'>{cartProductsCount}</p>

        <button className='counter__btn' onClick={incrementProductsCount}>
          <img src={iconPlus} />
        </button>
      </div>

      <button className='bg-orange-primary text-[14px] 
       flex items-center gap-3 font-bold
       py-[9px] px-14 rounded-md hover:opacity-90'>
        <img src={iconCartBlack} width={'15px'}/>

        Add to cart
      </button>

    </div>
  )
}

export { CartCounter };