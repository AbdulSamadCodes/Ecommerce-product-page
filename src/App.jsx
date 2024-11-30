import { React } from 'react';

import { Overlay } from '/src/Components/Overlay.jsx';
import { Header } from '/src/Components/Header.jsx';
import { MobileNavbar } from '/src/Components/MobileNavbar.jsx';
import { Dashboard } from '/src/Components/Dashboard.jsx';

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

      <Dashboard />
    </OverlayContextProvider>
  )
}

export default App;
