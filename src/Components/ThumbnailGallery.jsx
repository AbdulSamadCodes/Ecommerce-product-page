import { React } from 'react';
import { useRef } from 'react';
import { thumbnailGalleryImages } from '/src/Constant/index.js';

function ThumbnailGallery() {
  

  return (
    <div className='flex items-center gap-4'>
      {
        thumbnailGalleryImages.map((thumbnailImg) => {
          const { id, img } = thumbnailImg;

          return <span className='overflow-hidden rounded-md'>
            <img src={img} />
          </span>
        })
      }
    </div>
  );
}

export { ThumbnailGallery };