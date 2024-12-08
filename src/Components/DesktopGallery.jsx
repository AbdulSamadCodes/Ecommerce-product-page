import { React } from 'react';
import { useRef } from 'react';
import { ThumbnailGallery } from '/src/Components/ThumbnailGallery.jsx';

function DesktopGallery() {
   const mainImgRef = useRef(null); 

  return (
    <div className='desktop-gallery hidden md:grid 
       gap-5'>

      <div className='rounded-lg overflow-hidden'>
        <img ref={mainImgRef}/>
      </div>

      <ThumbnailGallery ref={mainImgRef}/>
    </div>
  );
}

export { DesktopGallery };