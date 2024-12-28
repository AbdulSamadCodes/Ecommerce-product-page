import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '/src/contexts/CartContext.jsx';

import { CartItem } from '/src/Components/Cart/CartItem.jsx';

function CartProductsList(  ) {
  const { cartItems , setCartItems } = useContext(CartContext);
  
  const deleteCartItem = (currentItem) => {
    setCartItems(items => {
       const filteredItems = items.filter(item => item.id != currentItem.id); 
       console.log(filteredItems); 

       return filteredItems; 
    });
  };

  return (
    <ul className='cart_products__list grid gap-3'>
      {
        cartItems.map((cartItemData) => {
          const { id } =   cartItemData    

          return <CartItem
            key={id}
            itemData={cartItemData}
            deleteCartItem = {deleteCartItem}
          />;
        })
      }
    </ul>
  )
}

export { CartProductsList };