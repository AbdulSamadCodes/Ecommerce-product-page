import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx';

import { CartProduct } from '/src/Components/Cart/CartProduct.jsx';
import imageProduct1Thumbnail from '/src/assets/images/image-product-1-thumbnail.jpg'

import { PrimaryButton } from '/src/Components/PrimaryButton.jsx';

function CartBasket({ isOpen }) {
  const { cartProductsCount,
    setCartProductsCount, isCartVisible } = useContext(CartContext);

  const productPrice = 125;

  const unsetProductCount = () => {
    setCartProductsCount(0);
  }

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

      <div className='pt-4 pb-5 px-4 grid gap-5'>
        <CartProduct
          productThumbnail={imageProduct1Thumbnail}
          productCount={cartProductsCount}
          productPrice={productPrice}
          unsetProductCount={unsetProductCount}
        />

        {cartProductsCount > 0 && <PrimaryButton
          icon={null}
          text={'Checkout'}
          landscapeWidth={'full'}
        />
        }

      </div>
    </div>

  ) : null
}

export { CartBasket };