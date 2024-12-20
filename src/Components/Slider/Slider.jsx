import { forwardRef } from 'react';
import { useRef } from 'react';

import { Slide } from '/src/Components/Slider/Slide.jsx';

const Slider = forwardRef(({ slideAlbum, slideRef }, ref) => {


  return (
    <div className='slider flex' ref={ref}>
      {
        slideAlbum.map((slideData) => {
          const { id, img } = slideData;

          return <Slide
           ref={slideRef}
           key={id} slideImg={img} 
           />
        })
      }
    </div >
  )
})

export { Slider };