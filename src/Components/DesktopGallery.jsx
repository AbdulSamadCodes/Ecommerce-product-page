import { React } from 'react';
import { useRef } from 'react';
import { ThumbnailGallery } from '/src/Components/ThumbnailGallery.jsx';

import imageProduct1 from 
  '/src/assets/images/image-product-1.jpg'

function DesktopGallery() {
  const mainImgRef = useRef(null);

  return (
    <div className='desktop-gallery hidden md:flex 
       flex-col justify-between gap-6'>

      <div className='rounded-lg overflow-hidden '>
        <img className='h-full' 
        src={imageProduct1} ref={mainImgRef}/>
      </div>

      <ThumbnailGallery ref={mainImgRef} />
    </div>
  );
}

export { DesktopGallery };