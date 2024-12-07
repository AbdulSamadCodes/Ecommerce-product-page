import { React } from 'react';
import { GallerySlider } from '/src/Components/Slider/GallerySlider.jsx';

function Dashboard() {
return (
    <main className='pt-[60px] grid md:grid-cols-2
       md:pt-[120px] md:px-4 overflow-hidden'>
         <GallerySlider /> 
    </main>
  );
}

export { Dashboard };