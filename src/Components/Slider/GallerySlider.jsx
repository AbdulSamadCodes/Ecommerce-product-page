import { React } from 'react';
import { useMemo } from 'react';
import { useSlider } from '/src/Components/Slider/useSlider.js';

import { sliderImages } from '/src/Constant/index.js';
import iconPrevious from '/src/assets/images/icon-previous.svg';
import iconNext from '/src/assets/images/icon-next.svg';

function GallerySlider() {
  const [slideNext, slidePrev,
    Slider,sliderRef] = useSlider(sliderImages.length);

  const memoizedImages = useMemo(() => sliderImages);  

  return (
    <div className='slider-container relative 
      md:hidden overflow-hidden'>
      <Slider
        ref={sliderRef} 
        slideAlbum={memoizedImages} 
        />

      <button className='navigation-btn absolute left-2
       bg-white rounded-full w-9 h-9
        grid place-content-center'
        onClick={slidePrev}>
        <img src={iconPrevious} style={{ width: '10px', height: '10px' }} />
      </button>

      <button className='navigation-btn 
         absolute right-2 bg-white 
         rounded-full w-9 h-9 grid place-content-center'
        onClick={slideNext}>
        <img src={iconNext} style={{ width: '10px', height: '10px' }} />
      </button>

    </div>
  );
}

export { GallerySlider }; 