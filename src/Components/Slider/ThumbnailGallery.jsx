import { React } from 'react';
import { forwardRef } from 'react';
import { thumbnailGalleryImages } from '/src/Constant/index.js';

const ThumbnailGallery = forwardRef(({ slideNumber, setSlideNumber }, ref) => {
  
  const moveSlider = (newSlideNumber) => {
    ref.current.style.transform = `translateX(
      -${newSlideNumber * 100}%)`;
  }

  const handleThumbnailSelection = (event) => {
    const selectedThumbnail = event.currentTarget;
    
    const selectedIndex = Array.from(selectedThumbnail.parentElement.children)
      .indexOf(selectedThumbnail);

    setSlideNumber(prev => {      
      moveSlider(selectedIndex);

      return selectedIndex;
    });
  }
  
  return (
    <div className='thumbnail-gallery flex 
      items-center gap-4' >
      {
        thumbnailGalleryImages.map((thumbnailImg, index) => {
          const { id, img } = thumbnailImg;

          return <span key={id}
            className={`thumbnail relative 
            ${index === 0 && 'selected-thumbnail'} 
            overflow-hidden 
            rounded-md`}
            onClick={handleThumbnailSelection}
          >
            <img src={img} />
          </span>
        })
      }
    </div>
  );
}
)

export { ThumbnailGallery };