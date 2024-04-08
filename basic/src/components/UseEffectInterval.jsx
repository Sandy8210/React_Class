import React, { useEffect, useState } from "react";

export default function UseEffectInterval() {
  const [count, setCount] = useState(0);
  const [intervalid, setIntervalid] = useState();

  useEffect(() => {
    console.log("timer start");

    const stopInterval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 500);

    setIntervalid(stopInterval);

    return () => {
      clearInterval(stopInterval);
    };
  }, []);

  return (
    <div>
      <p>
        <span>{count}</span>
      </p>
      <button
        onClick={() => {
          clearInterval(intervalid);
          console.log("stop");
        }}
      >
        STOP
      </button>
    </div>
  );
}
