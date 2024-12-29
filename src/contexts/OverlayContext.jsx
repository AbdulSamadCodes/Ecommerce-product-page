import { React } from 'react';
import { createContext } from 'react';
import { useMemo } from 'react';
import { useToggle } from '/src/hooks/useToggle.js';

const OverlayContext = createContext();

function OverlayContextProvider({ children }) {
  const [isOverlayActive, toggleIsOverlayActive] = useToggle(false);

  const value = {
    isOverlayActive: isOverlayActive,
    toggleIsOverlayActive: toggleIsOverlayActive
  };

  return (
    <OverlayContext.Provider value={value}>
      {children}
    </ OverlayContext.Provider>
  );
}

export { OverlayContextProvider, OverlayContext };