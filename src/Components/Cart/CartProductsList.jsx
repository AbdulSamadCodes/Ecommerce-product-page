import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx';

import { CartItem } from '/src/Components/Cart/CartItem.jsx';

function CartProductsList() {
  const { cartItems } = useContext(CartContext);

  return (
    <ul className='cart_products__list'>
      {
        cartItems.map((cartItemData , index) => {
          return <CartItem key = {index} itemData={cartItemData} />;
        })
      }
    </ul>
  )
}

export { CartProductsList };