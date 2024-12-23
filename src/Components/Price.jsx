import { React } from 'react';

function Price() {

  return (
    <div>
      <span className='flex items-center gap-3'>
        <p className='flex font-bold text-[24px]'>
           $125.0
        </p>

        <span className='bg-black text-white 
          font-bold py-[2px] px-2 rounded-lg'>
            50%
        </span>

      </span>
      <p className='text-dark-grayish-blue 
        font-extrabold mt-2 line-through'>
          $250.00
      </p>

    </div>
  );
}

export { Price };