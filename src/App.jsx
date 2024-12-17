import { React } from 'react';

import { Overlay } from '/src/Components/Overlay.jsx';
import { Header } from '/src/Components/Header.jsx';
import { MobileNavbar } from '/src/Components/MobileNavbar.jsx';
import { Dashboard } from '/src/Components/Dashboard.jsx';
import { LightboxGallery} from '/src/Components/Lightbox/LightboxGallery.jsx';

import { HeaderContextProvider } from '/src/contexts/HeaderContext.jsx';
import { OverlayContextProvider } from '/src/contexts/OverlayContext.jsx';
import { CartContextProvider } from '/src/contexts/CartContext.jsx';

function App() {
  return (
    <OverlayContextProvider>

      <Overlay />
      <CartContextProvider>

        <HeaderContextProvider>

          <Header />
          <MobileNavbar />

        </ HeaderContextProvider >

        <Dashboard />
      </CartContextProvider>

      <LightboxGallery />
    </OverlayContextProvider>
  )
}

export default App;
