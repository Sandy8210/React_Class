import React, { useState } from "react";

export default function Timer() {
  const [btn, setBtn] = useState(true);
  const [sec, setSec] = useState(0);

  const ButtonOutput = () => setBtn(!btn);

  return (
    <div>
      <h1>
        Timer <span>{sec}</span> seconds
      </h1>

      <div className="btn">
        <button onClick={ButtonOutput}> {btn ? "start" : "stop"} </button>
        {/*  <button
          onClick={() => {
            setBtn(!btn);
          }}
        >
          {btn ? "start" : "stop"}
        </button> */}
        <button>Reset</button>
      </div>
    </div>
  );
}
