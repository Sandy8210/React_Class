import React, { useEffect, useState } from "react";

export default function UseEffect3() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("clicked");
  }, [name]);
  return (
    <div>
      <p>UseEffect -3</p>
      <p>{count}</p>
      <p>{name}</p>
      <p>
        <span>Type name to useEffect wrk </span>
      </p>

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
