import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosFilter() {
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  const url = "http://localhost:3002/register/";

  
  const dataLength = data.length;

  useEffect(() => {
    axios({
      url: url,
      method: "get",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterHandle = () => {};

  //   console.log(dataLength);
  return (
    <div>
      <h2>Show Filter Search ....</h2>
      <input type="number" placeholder="Enter ID ..." onChange={(e) => setId(e.target.value)} />

      <button onClick={filterHandle}>Filter</button>

      <ul>
        {data.map((x) => (
          <li key={x.id}>
            {x.id} - {x.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
