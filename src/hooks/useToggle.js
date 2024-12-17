import { useState } from 'react';

function useToggle(initialState) {
  const [ toggle,setToggle ] = useState(initialState);

  const handleToggle = () => {
     setToggle(toggle => !toggle); 
  };

  return [ toggle,handleToggle];
}

export { useToggle };
