import { forwardRef } from 'react';

const Slider = forwardRef(({slideAlbum }, ref) => {

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