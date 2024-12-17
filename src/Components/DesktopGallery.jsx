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
  const { toggleIsOverlayActive } = useContext(OverlayContext);
  const [isLightboxOpen, toggleLightboxOpen] = useToggle(false);

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

          </div>

        </div>

        <LightboxGallery isOpen={isLightboxOpen}
          disableOpen={disableLightboxGallery} />
      </div>
      </>
  ); 
}
export {DesktopGallery};