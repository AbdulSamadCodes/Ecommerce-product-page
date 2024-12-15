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
        max-w-[330px] overflow-hidden top-[50%]
        left-[50%] translate-x-[-50%] translate-y-[-50%]
        z-40 rounded-lg'>

      <div className='lightbox-gallery relative'>
        <Slider
          slideAlbum={memoizedImages} ref={sliderRef} />
      </div>

      <button className='absolute top-[50%] left-0
       bg-white rounded-full w-8 h-8
         grid place-content-center'
        onClick={slidePrev}>
        <img src={iconPrevious}
          style={{ width: '10px', height: '10px' }} />
      </button>

      <button className='absolute top-[50%] right-0 
         bg-white rounded-full w-8 h-8 
         grid place-content-center'
        onClick={slideNext}>
        <img src={iconNext}
          style={{ width: '10px', height: '10px' }} />
      </button>
    </div>
  )
}

export { LightboxGallery };