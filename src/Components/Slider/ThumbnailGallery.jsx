import { React } from 'react';
import { useRef } from 'react';
import { forwardRef } from 'react';
import { thumbnailGalleryImages } from '/src/Constant/index.js';

const ThumbnailGallery = forwardRef(({ slideNumber, setSlideNumber }, ref) => {
  const thumbnailGalleryRef = useRef(null);
  
  const moveSlider = (newSlideNumber) => {
    ref.current.style.transform = `translateX(
      -${newSlideNumber * 100}%)`;
    }

  const handleThumbnailSelection = (event) => { 
    const thumbnails = Array.from(thumbnailGalleryRef.current?.children);

    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("selected-thumbnail");
    });

    const selectedThumbnail = event.target.closest("span");
    selectedThumbnail.classList.add("selected-thumbnail");

    const selectedIndex = Array.from(thumbnailGalleryRef.current?.children)
      .indexOf(selectedThumbnail);
    
    setSlideNumber(prev => {      
      moveSlider(selectedIndex);

      return selectedIndex;
    });
  }
  
  return (
    <div ref={thumbnailGalleryRef} 
      className='thumbnail-gallery flex 
      items-center gap-4'
      onClick={handleThumbnailSelection}>
      {
        thumbnailGalleryImages.map((thumbnailImg, index) => {
          const { id, img } = thumbnailImg;

          return <span key={id}
            className={`thumbnail relative 
            ${index === 0 && 'selected-thumbnail'} 
            overflow-hidden 
            rounded-md`}
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