import { React } from 'react';
import { useRef } from 'react';

function Slider({ currentSliderPos, slideAlbum }) {
  const sliderRef = useRef(null);

  return (
    <div className='slider flex' ref={sliderRef}>
      {
        slideAlbum.map((slideData) => {
          const { id, img } = slideData;

          return <div className = 'min-w-full' key={id}>
            <img src={img} />
          </div>
        })
      }
    </div>
  )
}

export { Slider };