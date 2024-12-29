import { React } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx';
import { useFetch } from '/src/hooks/useFetch.js';

import iconPlus from '/src/assets/images/icon-plus.svg';
import iconMinus from '/src/assets/images/icon-minus.svg';
import iconCartBlack from '/src/assets/images/icon-cart-black.svg';

import { PrimaryButton } from '/src/Components/PrimaryButton.jsx';

function CartCounter() {
  const URL = '/src/ProductData/productdata.json';

  const [quantity, setQuantity] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { data: productData } = useFetch(URL);
  const { toggleCartVisible } = useContext(CartContext);

  const addToCart = () => {
    if (quantity === 0) return;

    const similarCartItem = cartItems.find(cartItem => {
      return cartItem.id === productData.id;
    });

    setCartItems(items => {
      if (similarCartItem) {
        const clonedItems = [...items];

        const similarItemIndex = clonedItems.indexOf(similarCartItem);

        const updatedItem = {
          ...clonedItems[similarItemIndex],
          quantity
        }

        clonedItems[similarItemIndex] = updatedItem;

        return clonedItems;
      }

      const cartBasketItem = { ...productData, quantity };
      return [...items, cartBasketItem];
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 0 ? prev - 1 : 0);
  };

  return (
    <>
      <div className='flex items-center 
     gap-6 md:gap-4 flex-wrap'>

        <div className='flex items-center justify-between 
       gap-9 py-2 px-3 w-full xs:w-fit
       bg-light-grayish-blue rounded-md'>

          <button className='counter__btn 
          hover:opacity-70'>
            <img src={iconMinus} onClick={decrementQuantity} />
          </button>

          <p className='font-bold'>{quantity}</p>

          <button className='counter__btn 
          hover:opacity-70' onClick={incrementQuantity}>
            <img src={iconPlus} />
          </button>
        </div>

        <PrimaryButton
          icon={iconCartBlack}
          text={'Add to cart'}
          landscapeWidth={'fit'}
          onClick={addToCart} />
      </div>
    </>
  )
}

export { CartCounter };