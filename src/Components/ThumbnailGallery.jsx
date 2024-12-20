import { React } from 'react';
import { forwardRef } from 'react';
import { thumbnailGalleryImages } from '/src/Constant/index.js';

const ThumbnailGallery = forwardRef(({ slideNumber }, ref) => {

  const handleThumbnailSelection = (event) => {
    const thumbnailSrc = event.currentTarget.querySelector("img")
      .src;

    event.currentTarget.parentElement.querySelectorAll('.thumbnail').
      forEach(thumbnail => thumbnail.classList.remove('selected-thumbnail'));

    event.currentTarget.classList.add('selected-thumbnail');
  }

  return (
    <div className='flex items-center gap-4'>
      {
        thumbnailGalleryImages.map((thumbnailImg, index) => {
          const { id, img } = thumbnailImg;

          return <span key={id}
            className={`thumbnail relative 
            ${index === 0 && 'selected-thumbnail'} 
            overflow-hidden 
            rounded-md`}
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