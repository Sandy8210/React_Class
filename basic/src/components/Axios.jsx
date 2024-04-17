import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Axios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/students")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ol>
        {data.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ol>
    </div>
  );
}
