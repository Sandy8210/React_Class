import React, { useEffect, useState } from "react";

export default function UseEffect2() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mount");
  }, []);
  return (
    <div>
      <p>UseEffect - 2</p>
      <p>Name : {name}</p>
      <p>Count : {count}</p>

      <div className="btn">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
    </div>
  );
}
