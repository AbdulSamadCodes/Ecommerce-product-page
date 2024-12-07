import { forwardRef } from 'react';

const Slider = forwardRef(({ currentSliderPos, slideAlbum }, ref) => {
  console.log(ref);

  return (
    <div className='slider flex' ref={ref}>
      {
        slideAlbum.map((slideData) => {
          const { id, img } = slideData;

          return <div className='min-w-full' key={id}>
            <img src={img} />
          </div>
        })
      }
    </div >
  )
 }
)

export { Slider };