import { React } from 'react';

import iconDelete from '/src/assets/images/icon-delete.svg';
import { useToggle } from '/src/hooks/useToggle.js';

import imageProduct1Thumbnail from '/src/assets/images/image-product-1-thumbnail.jpg';


function CartItem({ itemData , deleteCartItem }) {
  const [isVisible, toggleVisible] = useToggle(true);
  const { name, price, discountedPrice, quantity } = itemData;

  const totalPrice = discountedPrice * quantity;

  return isVisible && quantity > 0 ?
    (
      <li className='flex items-center gap-4'>
        <img
          className='rounded-md'
          src={imageProduct1Thumbnail} width={'60px'} />

        <span className='text-dark-grayish-blue text-[13px]'>
          <p>{name}</p>

          <p>
            {`$${discountedPrice.toFixed(2)} x ${quantity}`}
            <strong className='text-[15px] ms-1
             text-very-dark-blue 
              font-bold'>
              {`$${totalPrice.toFixed(2)}`}
            </strong>
          </p>
        </span>

        <button className='ms-auto' onClick={() => deleteCartItem(itemData)}>
          <img src={iconDelete} />
        </button>
      </li>
    ) : (

      <div className='py-16 px-3 
       text-[14px]'>
        <p className='text-dark-grayish-blue 
         font-bold text-center'>
          Your cart is empty
        </p>
      </div>
    )
}

export { CartItem };