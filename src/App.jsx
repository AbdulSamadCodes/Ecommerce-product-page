import { React } from 'react';

import { Overlay } from '/src/Components/Overlay.jsx';
import { Header } from '/src/Components/Header.jsx';
import { MobileNavbar } from '/src/Components/MobileNavbar.jsx';
import { Container } from '/src/Components/Container.jsx';

import { HeaderContextProvider } from '/src/contexts/HeaderContext.jsx';
import { OverlayContextProvider } from '/src/contexts/OverlayContext.jsx';

function App() {
  return (
    <OverlayContextProvider>
      <Overlay />  

      <HeaderContextProvider>
        <Header />
        <MobileNavbar />
      </ HeaderContextProvider >

      <Container />
    </OverlayContextProvider>
  )
}

export default App;
