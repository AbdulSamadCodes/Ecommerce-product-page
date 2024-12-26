import { React } from 'react';

function Price ({ productsData , error, isLoading }) {
  if(error) return <p className="font-bold">Error Loading Prices!!</p>

  if(isLoading) return <p className="font-bold">Loading...</p>
  console.log(productsData);

  return (
    <div>
      <span className='flex items-center gap-3'>
        <p className='flex font-bold text-[24px]'>
           { productsData.price?.toFixed(2) } 
        </p>

        <span className='bg-black text-white 
          font-bold py-[2px] px-2 rounded-lg'>
           {(100 *  productsData?.discount) + "%" } 
        </span>

      </span>
      <p className='text-dark-grayish-blue 
        font-extrabold mt-2 line-through'>
           { productsData.discountedPrice?.toFixed(2) } 
      </p>

    </div>
  );
}

export { Price }