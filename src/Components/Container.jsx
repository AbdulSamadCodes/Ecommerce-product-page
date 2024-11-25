import { Header } from '/src/Components/Header.jsx';
import { MobileNavbar } from '/src/Components/MobileNavbar.jsx';
import { Overlay } from '/src/Components/Overlay.jsx';
import { HeaderContextProvider } from '/src/contexts/HeaderContext.jsx';

function Container() {
  return (
    <div className='max-w-[1100px] ms-auto 
      me-auto px-6'>
        <Overlay />
    </div>
  );
}

export { Container };