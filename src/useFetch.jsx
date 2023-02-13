import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [setData, setMyData] = useState([]);
  const [isError, setIsError] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

  return { setData, isError };
}

export default useFetch;
