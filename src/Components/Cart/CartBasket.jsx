import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx';

import { CartProductsList } from '/src/Components/Cart/CartProductsList.jsx';
import imageProduct1Thumbnail from '/src/assets/images/image-product-1-thumbnail.jpg'

import { PrimaryButton } from '/src/Components/PrimaryButton.jsx';

function CartBasket({ isOpen }) {
  const { isCartVisible , } = useContext(CartContext);

  
  return isCartVisible ? (
    <div className='cart-basket grid absolute 
       top-[90px] z-10 bg-white w-full 
       max-w-[320px] left-[50%] 
       translate-x-[-50%] rounded-md '>

      <div className='text-black pt-3
        pb-5 px-4 font-semibold 
        border-b-1 border-b-grayish-blue'>
        Cart
      </div>

      <CartProductsList />

      <div className='pt-4 pb-5 px-4 grid gap-5'>
        <PrimaryButton
          icon={null}
          text={'Checkout'}
          landscapeWidth={'full'}
        />
      </div>
    </div>

  ) : null
}

export { CartBasket };