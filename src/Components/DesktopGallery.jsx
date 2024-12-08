import { React } from 'react';
import { useMemo } from 'react';
import { sliderImages } from '/src/Constant/index.js';
import { useSlider } from '/src/Components/Slider/useSlider.js';

function DesktopGallery() {
  const [slideNext, slidePrev,
    Slider, sliderRef] = useSlider(sliderImages.length);

  const memoizedImages = useMemo(() => sliderImages);  

  return (
    <div className='desktop-gallery hidden md:block 
      overflow-hidden rounded-lg'>
      <Slider slideAlbum={memoizedImages}/>

      
    </div>
  );
} 

export { DesktopGallery };