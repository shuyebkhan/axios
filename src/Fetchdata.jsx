import { useEffect, useState } from "react";
import axios from "axios";

function Fetchdata() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setMyData(response.data.products));
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>FetchData</h1>

        <table className="table" style={{ width: "100%" }}>
          <thead />
          <tr>
            <th>ID</th>
            <th>BRAND</th>
            <th>CATEGORY</th>
            <th>DISCOUNT_PERCENTAGE</th>
            <th>PRICE</th>
          </tr>
          <thead />

         

          {myData.map(( { id, brand, category, discountPercentage, price }) => 
             (
              <tbody key={id}>
                <tr>
                  <td>{id}</td>
                  <td>{brand}</td>
                  <td>{category}</td>
                  <td>{discountPercentage}</td>
                  <td>{price}</td>
                </tr>
              </tbody>
            )
          )}
        </table>
      </div>
    </>
  );
}

export default Fetchdata;
