import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function Timer_UseRef() {
  const [timer, setTimer] = useState(0);
  const stopRef = useRef();

  useEffect(() => {
    stopRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(stopRef.current);
    };
  }, [timer]);
  return (
    <div>
      <h3>Timer --- {timer}</h3>
      <button
        onClick={() => {
          clearInterval(stopRef.current);
        }}
      >
        STOP
      </button>
    </div>
  );
}
