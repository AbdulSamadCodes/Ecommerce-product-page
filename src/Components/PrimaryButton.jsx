import { React } from 'react';


function PrimaryButton( {icon} ) {

  return (
    <button className='bg-orange-primary text-[14px] 
       flex items-center justify-center gap-3 font-bold 
       w-full xs:w-auto py-[9px] px-16 rounded-md 
       hover:opacity-90'>

      { icon && <img src={icon} width={'15px'} />}

      Add to cart 
    </button>
  );
}

export { PrimaryButton };