import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mount");
  });
  return (
    <div>
      <p>UseEffect - 1</p>

      <h1>
        <span>{count}</span>
      </h1>

      <div className="btn">
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
    </div>
  );
}
