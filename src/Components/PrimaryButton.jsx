import { React } from 'react';


function PrimaryButton( {icon} ) {

  return (
    <button className='bg-orange-primary  
       flex items-center justify-center gap-3 
       text-[14px] font-bold py-[12px] px-16 
       rounded-md hover:opacity-90 w-full
       xs:w-fit'>

      { icon && <img src={icon} width={'15px'} />}

      Add to cart 
    </button>
  );
}

export { PrimaryButton };