import { React } from 'react';
import { createContext } from 'react';
import { useMemo } from 'react';
import { useToggle } from '/src/hooks/useToggle.js';

const OverlayContext = createContext();

function OverlayContextProvider({ children }) {
  const [isOverlayActive,toggleIsOverlayActive] = useToggle(false);

  const value = useMemo(() => {
    return {
      isOverlayActive : isOverlayActive,
      toggleIsOverlayActive: toggleIsOverlayActive     
    }
  },[isOverlayActive]);

  return (
    <OverlayContext.Provider value={value}>
      {children}
    </ OverlayContext.Provider>
  );
}

export { OverlayContextProvider, OverlayContext };