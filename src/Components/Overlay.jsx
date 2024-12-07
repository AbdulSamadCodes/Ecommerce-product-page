import { React } from 'react';
import { useContext } from 'react';
import { OverlayContext } from '/src/contexts/OverlayContext.jsx';

function OverlayBody({ isActive }) {
  return (
    isActive
      ?
      <div className='fixed inset-0
       z-20  bg-black_75 md:hidden'>
      </div> :
      null
  );
}

function Overlay() {
  const { isOverlayActive } = useContext(OverlayContext);

  return (
    <OverlayBody isActive={isOverlayActive} />
  );
}

export { Overlay };