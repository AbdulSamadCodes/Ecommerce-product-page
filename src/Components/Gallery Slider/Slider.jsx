import { React } from 'react';

function Slider({ sliderImg }) {
  console.log("rendered");  
  
  return (
    <div>
      <img src={sliderImg} />
    </div>
  );
}

export { Slider };