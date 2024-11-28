import { createContext } from 'react';
import { useMemo } from 'react';
import { useToggle } from '/src/hooks/useToggle.js';

const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useToggle(false);

  const value = useMemo(() => {
    return {
      isNavOpen: isNavOpen, 
      setIsNavOpen : setIsNavOpen 
    }
  },[isNavOpen]);

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderContext, HeaderContextProvider };