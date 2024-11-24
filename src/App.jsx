import { React } from 'react';

import { Header } from '/src/Components/Header.jsx';
import { MobileNavbar } from '/src/Components/MobileNavbar.jsx';
import { HeaderContextProvider } from '/src/contexts/HeaderContext.jsx';
import { Container } from '/src/Components/Container.jsx';

function App() {
  return (
    <>
      <HeaderContextProvider>
        <Header />
        <MobileNavbar />
      </HeaderContextProvider>

      <Container />
    </>
  )
}

export default App;
