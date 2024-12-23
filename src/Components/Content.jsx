import { React } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Price } from '/src/Components/Price.jsx';

import { CartCounter } from '/src/Components/Cart/CartCounter.jsx';
function Content() {
   return (

    <div className='content grid content-start 
      gap-5 px-4 md:gap-8'>

      <div>

        <p className='text-dark-grayish-blue text-[13px]
        font-bold uppercase tracking-widest'>
          Sneaker Company
        </p>

        <h2 className='text-very-dark-blue font-bold
          text-[27px] sm:text-[30px] md:text-[40px] mt-2'>
          Fall Limited Edition <br /> Sneakers
        </h2>

      </div>

      <p className='text-dark-grayish-blue text-[15px]
         font-medium max-w-[52ch]'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

       <Price />

      <CartCounter />

    </div>
  );
}

export { Content };