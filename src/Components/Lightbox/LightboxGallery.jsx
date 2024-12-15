import { React } from 'react';
import { useMemo } from 'react';
import { sliderImages } from '/src/Constant/index.js';
import { useSlider } from '/src/Components/Slider/useSlider.js';

import iconPrevious from '/src/assets/images/icon-previous.svg';
import iconNext from '/src/assets/images/icon-next.svg';

function LightboxGallery() {
  const [slideNext, slidePrev,
    Slider, sliderRef] = useSlider(sliderImages.length);

  const memoizedImages = useMemo(() => sliderImages);

  return (
    <div className='lightbox-container fixed
        max-w-[330px] top-[50%] 
        left-[50%] translate-x-[-50%] 
        translate-y-[-50%] z-40 rounded-lg'>

      <div className='lightbox-gallery relative 
        overflow-hidden rounded-md'>
        <Slider
          slideAlbum={memoizedImages} ref={sliderRef} />

        <button className='fixed top-[50%] -left-3
        bg-white rounded-full w-8 h-8
          grid place-content-center'
           onClick={slidePrev}>
          <img src={iconPrevious}
            style={{ width: '10px', height: '10px' }} />
        </button>

        <button className='fixed top-[50%] -right-3 
         bg-white rounded-full w-8 h-8 
          grid place-content-center'
           onClick={slideNext}>
          <img src={iconNext}
            style={{ width: '10px', height: '10px' }} />
        </button>
      </div>
    </div>
  )
}

export { LightboxGallery };