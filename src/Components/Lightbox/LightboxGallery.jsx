import { React } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';

import { sliderImages } from '/src/Constant/index.js';
import { useSlider } from '/src/Components/Slider/useSlider.js';

import iconPrevious from '/src/assets/images/icon-previous.svg';
import iconNext from '/src/assets/images/icon-next.svg';
import iconClose from '/src/assets/images/icon-close.svg';

import { ThumbnailGallery } from '/src/Components/ThumbnailGallery.jsx';

function LightboxGallery({ isOpen }) {
  const [slideNext, slidePrev,
    Slider, sliderRef] = useSlider(sliderImages.length);

  const mainImgRef = useRef(null);
  const memoizedImages = useMemo(() => sliderImages);

  return isOpen ? (
      <div className='lightbox-container grid gap-4
        fixed  max-w-[330px] top-[50%] 
        left-[50%] translate-x-[-50%] 
        translate-y-[-50%] z-40 rounded-lg'>

        <div className='lightbox-gallery relative 
        overflow-hidden rounded-md'>
          <Slider
            slideAlbum={memoizedImages} ref={sliderRef} />

          <button className='fixed navigation-btn
         -left-4 bg-white rounded-full 
         w-10 h-10 grid place-content-center'
            onClick={slidePrev}>
            <img src={iconPrevious}
              style={{ width: '10px', height: '10px' }} />
          </button>

          <button className='fixed navigation-btn
         -right-4  bg-white rounded-full 
         w-10 h-10 grid place-content-center'
            onClick={slideNext}>
            <img src={iconNext}
              style={{ width: '10px', height: '10px' }} />
          </button>

          <button className='fixed -top-6 right-0'>
            <img src={iconClose} />
          </button>
        </div>

        <ThumbnailGallery ref={sliderRef} />

      </div>
  ) : null;
}

export { LightboxGallery };