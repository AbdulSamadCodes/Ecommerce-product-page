import { React } from 'react';
import { useRef } from 'react';

import { useContext } from 'react';
import { OverlayContext } from '/src/contexts/OverlayContext.jsx';

import { Overlay } from '/src/Components/Overlay.jsx';
import { ThumbnailGallery } from '/src/Components/ThumbnailGallery.jsx';

import imageProduct1 from 
  '/src/assets/images/image-product-1.jpg'

function DesktopGallery() {
  const { setIsOverlayActive } = 
                          useContext(OverlayContext);
  const mainImgRef = useRef(null);

  return (
    <div className='desktop-gallery hidden md:flex 
       flex-col gap-8'>

      <div className='rounded-lg overflow-hidden '>
        <div onClick={setIsOverlayActive}>
          <img className='h-full'
          src={imageProduct1} ref={mainImgRef}/>
        </div>
      </div>

      <ThumbnailGallery ref={mainImgRef} />
    </div>
  );
}

export { DesktopGallery };