import { React } from 'react';
import { createContext } from 'react';
import { useToggle } from '/src/hooks/useToggle.js';

const OverlayContext = createContext();

function OverlayContextProvider({ children }) {
  const [isOverlayActive,setIsOverlayActive] = useToggle(false);

  return (
    <OverlayContext.Provider value={{ isOverlayActive,setIsOverlayActive }}>
      {children}
    </ OverlayContext.Provider>
  );
}

export { OverlayContextProvider, OverlayContext };