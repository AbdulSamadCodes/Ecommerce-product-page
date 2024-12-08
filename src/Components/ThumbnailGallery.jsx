import { React } from 'react';
import { forwardRef } from 'react';
import { thumbnailGalleryImages } from '/src/Constant/index.js';

const ThumbnailGallery = forwardRef(({ },ref) => {
  
  const handleThumbnailSelection = (event) => {
    const thumbnailSrc = event.currentTarget.querySelector("img").src;
    
    ref.current.src = thumbnailSrc.replace('-thumbnail','');
  }

  return (
    <div className='flex items-center gap-4'>
      {
        thumbnailGalleryImages.map((thumbnailImg) => {
          const { id, img } = thumbnailImg;

          return <span key={id} className='overflow-hidden rounded-md' 
            onClick={handleThumbnailSelection}>
            <img src={img} />
          </span>
        })
      }
    </div>
  );
 }
)

export { ThumbnailGallery };