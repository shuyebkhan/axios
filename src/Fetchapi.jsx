import { useEffect, useState } from "react";
import axios from "axios";

function Fetchapi() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setMyData(response.data));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Fetch-Api</h1>
        <table className="table" style={{ width: "100%" }}>
          <tr>
            <th>ID</th>
            <th>USER_ID</th>
            <th>Title</th>
          </tr>

          {myData.map((item) => {
            const { id, userId, title } = item;

            return (
              <tr>
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
