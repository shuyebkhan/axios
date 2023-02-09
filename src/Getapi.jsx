import Axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL="https://jsonplaceholder.typicode.com/todos/1";
// const BASE_URL = "https://da7221d4-0819-408e-8cba-ed8732bc9ce7.mock.pstmn.io"     
 

function Getapi() {
      const [myData,setMyData]=useState([]);
           
          useEffect(()=>{
             
                Axios.get(BASE_URL)
                .then((response)=>{
                    setMyData(response.data)
                    
                })
          },[])
  return <>
                 <h1>GetApi</h1>
                 {/* <h1>{myData.name}</h1> */}
                 <h1>{myData.id}</h1>

         </>;
}

export default Getapi;
