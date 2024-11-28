import { React  } from 'react';
import { useContext } from 'react';

function useContextProvider(Context,ContextProvider,Component) {
  const contextValues = useContext(Context);
  console.log(contextValues);  
  
  return (props) => {
    return (
      <ContextProvider>
         <Component {...props}/>
      </ContextProvider>
    );
  }
}

export { useContextProvider };