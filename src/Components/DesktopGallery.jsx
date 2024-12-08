import { React } from 'react';
import { useMemo } from 'react';
import { ThumbnailGallery } from '/src/Components/ThumbnailGallery.jsx';

function DesktopGallery() {
    

  return (
    <div className='desktop-gallery hidden md:grid 
      overflow-hidden rounded-lg gap-5'>
      <div>
        <img />
      </div>

      <ThumbnailGallery />
    </div>
  );
}

export { DesktopGallery };