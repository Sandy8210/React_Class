import React, { useEffect, useState } from "react";

export default function CountDownTimer() {
  const [sec, setSec] = useState(NaN);
  const [nonEdit, SetnonEdit] = useState(false);

  let value;

  useEffect(() => {
    let startInterval;

    if (nonEdit && sec > 0) {
      console.log("start countDown");

      startInterval = setInterval(() => {
        setSec((prevSec) => {
          console.log(prevSec);
          if (prevSec === 1) {
            clearInterval(startInterval);
            SetnonEdit(false);
          }
          return prevSec - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(startInterval);
    };
  }, [nonEdit]);

  return (
    <div className="center">
      <h1>
        CountDown-Timer <span>{sec}</span> seconds ...
      </h1>

      <h1>{sec === 0 && <h2>Happy Birthday</h2>}</h1>

      <div className="btn">
        <input
          type="number"
          onChange={(e) => {
            setSec(e.target.value);
            value = e.target.value;
          }}
          disabled={nonEdit}
        />

        <button onClick={() => SetnonEdit(!nonEdit)}>{nonEdit ? "Stop" : "Start"}</button>
        <button
          onClick={() => {
            setSec(sec);
            console.log(value);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";

// export default function CountDownTimer() {
//   const [sec, setSec] = useState(NaN);
//   const [nonEdit, SetnonEdit] = useState(false);

//   useEffect(() => {
//     let startInterval;

//     if (nonEdit && sec > 0) {
//       console.log("start countDown");

//       startInterval = setInterval(() => {
//         setSec((prevSec) => {
//           if (prevSec === 1) {
//             clearInterval(startInterval);
//             SetnonEdit(false);
//           }
//           return prevSec - 1;
//         });
//       }, 1000);
//     }

//     return () => {
//       clearInterval(startInterval);
//     };
//   }, [nonEdit]);

//   return (
//     <div className="center">
//       <h1>
//         CountDown-Timer <span>{sec}</span> seconds ...
//       </h1>

//       <div className="btn">
//         <input type="number" value={sec} onChange={(e) => setSec(parseInt(e.target.value))} disabled={nonEdit} />

//         <button onClick={() => SetnonEdit(!nonEdit)}>{nonEdit ? "Stop" : "Start"}</button>
//         <button onClick={() => setSec(NaN)}>Reset</button>
//       </div>
//     </div>
//   );
// }
