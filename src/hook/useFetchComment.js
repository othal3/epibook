import { useEffect, useState } from "react";

function useFetchComment(url) {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const getData = async () => {
      setIsLoading(true);
      try {
         const response = await fetch(url, {
            method: "GET",
            headers: {
               Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyZGMyMTFmMTc1YzAwMTRjNTU4YjMiLCJpYXQiOjE2OTU4MjUyMDMsImV4cCI6MTY5NzAzNDgwM30.cuY1DgZL19Xn-JUyOyHbIyAfICyxvZIkA1zZOk6IIVA",
               "Content-Type": "application/json",
            },
         });
         const data = await response.json();
         setData(data);
         setIsLoading(false);
      } catch (e) {
         setError(e);
      }
   };

   useEffect(() => {
      getData();
      // eslint-disable-next-line
   }, [url]);

   return { data, isLoading, error };
}

export default useFetchComment;
