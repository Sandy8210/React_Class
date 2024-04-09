// import React, { useEffect, useState } from "react";

// export default function Timer() {
//   const [btn, setBtn] = useState(false);
//   const [sec, setSec] = useState(0);
//   const [inetervalId, setIntervalId] = useState();

//   useEffect(() => {
//     if (btn) {
//       const startInterval = setInterval(() => {
//         setSec((c) => c + 1);
//       }, 1000);

//       setIntervalId(startInterval);

//       // return () => {
//       //   clearInterval(inetervalId);
//       // };
//     }
//   }, [sec]);

//   const ButtonOutput = () => {
//     setBtn((prev) => !prev);

//     if (!btn) {
//       clearInterval(inetervalId);
//     }
//   };

//   return (
//     <div>
//       <h1>
//         Timer <span>{sec}</span> seconds
//       </h1>

//       <div className="btn">
//         <button onClick={ButtonOutput}> {btn ? "Stop" : "Start"} </button>
//         <button>Reset</button>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Timer() {
  const [btn, setBtn] = useState(false);
  const [sec, setSec] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (btn) {
      const startInterval = setInterval(() => {
        setSec((c) => c + 1);
      }, 1000);

      setIntervalId(startInterval);
    } else {
      clearInterval(intervalId);
    }

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [btn]);

  const handleButtonToggle = () => {
    setBtn((prev) => !prev);
  };

  const handleReset = () => {
    if (btn) {
      console.log("stop");
      setSec(0);
    } else {
      console.log("start");
      setSec(0);
      clearInterval(intervalId);
    }
  };

  return (
    <div className="center">
      <h1>
        Timer <span>{sec}</span> seconds ...
      </h1>

      <div className="btn">
        <button onClick={handleButtonToggle}>{btn ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
