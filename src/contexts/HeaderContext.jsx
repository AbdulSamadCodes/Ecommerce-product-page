import { createContext } from 'react';
import { useToggle } from '/src/hooks/useToggle.js';

const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useToggle(false);
  
  return (
    <HeaderContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderContext, HeaderContextProvider };