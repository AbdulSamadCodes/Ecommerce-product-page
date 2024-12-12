import { React } from 'react';

function PrimaryButton({ icon , text, landscapeWidth }) {

  return (
    <button className={`bg-orange-primary  
       flex items-center justify-center gap-3 
       text-[14px] font-bold py-[10px] px-16 
       rounded-md hover:opacity-70 w-full
       
       xs:w-${landscapeWidth}`}>

      {icon && <img src={icon} width={'15px'} />}

      {text}
    </button>
  );
}

export { PrimaryButton };