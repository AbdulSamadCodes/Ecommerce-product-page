import { React } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { OverlayContext } from '/src/contexts/OverlayContext.jsx';

import { useToggle } from '/src/hooks/useToggle.js'
import { useSlider } from '/src/Components/Slider/useSlider.js';

import { ThumbnailGallery } from '/src/Components/ThumbnailGallery.jsx';

import { LightboxGallery } from
  '/src/Components/Lightbox/LightboxGallery.jsx';

import { sliderImages } from '/src/Constant/index.js';

function DesktopGallery() {
  const { toggleIsOverlayActive } = useContext(OverlayContext);
  const [isLightboxOpen, toggleLightboxOpen] = useToggle(false);

  const [, ,Slider, sliderRef, slideNumber] = useSlider(sliderImages.length);
  const memoizedImages = useMemo(() => sliderImages);  
  
  const enableLightboxGallery = () => {
    toggleIsOverlayActive();
    toggleLightboxOpen()
  }

  const disableLightboxGallery = () => {
    toggleIsOverlayActive();
    toggleLightboxOpen()
  }

  return (
    <>
      <div className='desktop-gallery hidden md:flex 
       flex-col gap-8'>
        <div className='rounded-lg overflow-hidden '>
          
          <div onClick={enableLightboxGallery}>
              <Slider 
                ref={sliderRef} 
                slideAlbum={memoizedImages} 
              />
          </div>
        </div>

        <ThumbnailGallery ref={sliderRef} slideNumber={slideNumber}/>

        <LightboxGallery isOpen={isLightboxOpen}
          disableOpen={disableLightboxGallery} />
      </div>
    </>
  );
}
export { DesktopGallery };