import { React } from 'react';

function Content() {
  return (
    <div className='content grid content-start 
      gap-2 px-4 md:gap-5'>
      <p className='text-dark-grayish-blue text-[13px] font-bold
      uppercase tracking-widest'>
        Sneaker Company
      </p>

      <h2 className='text-very-dark-blue font-bold 
        text-[24px] md:text-[40px]'>
        Fall Limited Edition <br/> Sneakers
      </h2>

      <p className='text-dark-grayish-blue text-[15px]
         font-medium max-w-[52ch]'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
    </div>
  );
}

export { Content };