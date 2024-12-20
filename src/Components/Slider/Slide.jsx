import { React } from 'react';

function Slide({ slideImg }) {

  return (
    <div className='min-w-full' >
      <img src={slideImg} />
    </div>
  );
}

export { Slide };