import { useState } from 'react';
import { useEffect } from 'react';

function useFetch(url) {
   const [productData, setProductData] = useState({});
   const [error, setError] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      ; (async () => {
         try {
            setIsLoading(true);

            const response = await fetch(url);
            const data = await response.json();
            setProductData(data);

            setIsLoading(false);
         } catch (error) {
            console.log(error.message);
            setError(true);
         } finally {
            setIsLoading(false);
         }
      })();
   }, []);

   return [productData, error, isLoading];
}

export { useFetch };