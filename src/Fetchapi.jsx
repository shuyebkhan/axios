import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/todos";

function Fetchapi() {
  const [myData, setMyData] = useState([]);
  const [isError, setIserror] = useState("");

  // NOTE:  USING PROMISE
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => setMyData(response.data))
  //      .catch((error)=> setIserror(error.message));
  // }, []);

  // NOTE: Using Async Await
  const getApiData = async (url) => {
    try {
      const response = await axios.get(url);
      setMyData(response.data);
    } catch (error) {
      setIserror(error.message);
    }
  };

  useEffect(() => {
    getApiData(`${API}`);
  }, []);
  return (
    <>
      <div className="container">
        <h1>Fetch-Api</h1>
        {!isError == "" && <h2>{isError}</h2>}
        <table className="table" style={{ width: "100%" }}>
          <tr>
            <th>ID</th>
            <th>USER_ID</th>
            <th>Title</th>
          </tr>

          {myData.map(({ id, userId, title }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>{title}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Fetchapi;
