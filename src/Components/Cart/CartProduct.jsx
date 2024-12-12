import { React } from 'react';

import iconDelete from '/src/assets/images/icon-delete.svg';
import { useToggle } from '/src/hooks/useToggle.js';

function CartProduct({ productThumbnail,
  productCount, productPrice, unsetProductCount }) {

  const totalAmount = productPrice * productCount;
  const [isVisible, toggleVisible] = useToggle(true);

  const onClickHandler = () => {
    toggleVisible();
    unsetProductCount();
  }

  return isVisible && productCount > 0 ?
    (
      <ul>
        <li className='flex items-center gap-4'>
          <img
            className='rounded-md'
            src={productThumbnail} width={'60px'} />

          <span className='text-dark-grayish-blue text-[13px]'>
            <p>Fall Limited Edition Sneakers</p>

            <p>
              {`$${productPrice}.00 x ${productCount}`}
              <strong className='text-[15px] ms-1
             text-very-dark-blue 
              font-bold'>
               {`$${totalAmount}`}
              </strong>
            </p>
          </span>

          <button className='ms-auto'
             onClick={onClickHandler}>
            <img src={iconDelete} />
          </button>
        </li>
      </ul>

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

export { CartProduct };