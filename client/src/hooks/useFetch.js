import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
      } catch (error) {
      
        console.error("Error fetching data:", error);
      }
    };
    makeApiCall();
  }, [endpoint]); 

  return { data };
};

export default useFetch;
