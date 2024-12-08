import { React } from 'react';
import { GallerySlider } from '/src/Components/Slider/GallerySlider.jsx';
import { Content } from '/src/Components/Content.jsx';
import { DesktopGallery } from '/src/Components/DesktopGallery.jsx';

function Dashboard() {
  return (
    <main className='max-w-[1100px] pt-[60px] grid md:grid-cols-dashboard
       md:pt-[150px] md:px-4 ms-auto me-auto gap-3'>
      <GallerySlider />

      <DesktopGallery />
      <Content />
    </main>
  );
}

export { Dashboard };