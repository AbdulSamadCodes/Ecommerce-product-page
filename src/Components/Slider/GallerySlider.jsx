import { React } from 'react';
import { useMemo } from 'react';
import { useSlider } from '/src/Components/Slider/useSlider.js';

import { sliderImages } from '/src/Constant/index.js';
import iconPrevious from '/src/assets/images/icon-previous.svg';
import iconNext from '/src/assets/images/icon-next.svg';

function GallerySlider() {
  const [slideNumber, slideNext, slidePrev, 
        Slider, sliderRef] = useSlider(sliderImages.length);

  const memoizedImages = useMemo(() => sliderImages);
  
  return (
    <div className='slider-container relative overflow-hidden'>
      <Slider currentSliderPos={slideNumber}
        slideAlbum={memoizedImages} ref={sliderRef} />

      <button className='absolute top-[50%] left-3 bg-white 
         rounded-full w-9 h-9 grid place-content-center'
        onClick={slidePrev}>
        <img src={iconPrevious} style={{ width: '10px', height: '10px' }} />
      </button>

      <button className='absolute top-[50%] right-3 bg-white 
         rounded-full w-9 h-9 grid place-content-center'
        onClick={slideNext}>
        <img src={iconNext} style={{ width: '10px', height: '10px' }} />
      </button>

    </div>
  );
}

export { GallerySlider }; 