import { React } from 'react';
import { Slider } from '/src/Components/Gallery Slider/Slider.jsx';

import { sliderImages } from '/src/Constant/index.js';

function GallerySlider() {

  return (
    <div>
      {
        sliderImages.map((sliderImg) => {
          const { id , src} = sliderImg;
          
          return <Slider key={id} sliderImg={src} />
        })
      }
    </div>
  );
}

export { GallerySlider };