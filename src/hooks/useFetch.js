import { useState } from 'react';
import { useEffect } from 'react';

function useFetch(url) {
   const [data, setData] = useState({});
   const [error, setError] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      ; (async () => {
         try {
            setIsLoading(true);

            const response = await fetch(url);
            const data = await response.json();
            setData(data);

            setIsLoading(false);
         } catch (error) {
            setError(true);
         } finally {
            setIsLoading(false);
         }
      })();
   }, []);

   return { data, error, isLoading };
}

export { useFetch };