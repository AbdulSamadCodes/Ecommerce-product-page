import { React } from 'react';
import { GallerySlider } from '/src/Components/Slider/GallerySlider.jsx';
import { Content } from '/src/Components/Content.jsx';
import { DesktopGallery } from '/src/Components/DesktopGallery.jsx';
import { CartBasket } from '/src/Components/Cart/CartBasket.jsx';

function Dashboard() {
  return (
    <>
      <CartBasket />

      <main className='max-w-[1100px]
        pt-[60px] grid 
        md:grid-cols-dashboard md:pt-[150px] md:px-12 
        ms-auto me-auto gap-6 md:gap-8 lg:gap-28'>
        <GallerySlider />

        <DesktopGallery />
        <Content />
      </main>

    </>
  );
}

export { Dashboard };