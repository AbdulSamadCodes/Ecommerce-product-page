import { React } from 'react';
import { useRef } from 'react';

import { useContext } from 'react';
import { OverlayContext } from '/src/contexts/OverlayContext.jsx';
import { useToggle } from '/src/hooks/useToggle.js'

import { ThumbnailGallery } from '/src/Components/ThumbnailGallery.jsx';
import { LightboxGallery } from 
  '/src/Components/Lightbox/LightboxGallery.jsx';

import imageProduct1 from
  '/src/assets/images/image-product-1.jpg'

function DesktopGallery() {
  const { setIsOverlayActive } = useContext(OverlayContext);
  const [isLightboxOpen, setLightboxOpen] = useToggle(false);

  const mainImgRef = useRef(null);

  const enableLightboxGallery = () => {
    setIsOverlayActive();
    setLightboxOpen();
  }

  return (
    <>
      <div className='desktop-gallery hidden md:flex 
       flex-col gap-8'>

        <div className='rounded-lg overflow-hidden '>
          <div onClick={enableLightboxGallery}>
            <img className='h-full' 
              src={imageProduct1} ref={mainImgRef} />
          </div>
        </div>

        <ThumbnailGallery ref={mainImgRef} />
      </div>

     <LightboxGallery isOpen={isLightboxOpen}/> 
    </>
  );
}

export { DesktopGallery };