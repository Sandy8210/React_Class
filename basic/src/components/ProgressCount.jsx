import React, { useEffect, useState } from "react";

export default function ProgressCount() {
  const [duration, setDuration] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [istimerComplete, setIsTimerComplete] = useState(false);

  const handleChange = (e) => {
    setDuration(e.target.value); // 10
    setSeconds(e.target.value); // 10
  };

  useEffect(() => {
    let interval;
    if (isRunning && seconds) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      setIsTimerComplete(true);
      setIsRunning(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, seconds]);

  const loaderWidth = (seconds / duration) * 100;
  return (
    <div className="center">
      {istimerComplete ? (
        <h2>
          Happy Wedding Aniversary To <span> LGBTQ+ </span> <br /> <span> Kaushika ( Ground Floor ) </span>
          <div class="loader"></div>
          <span> Rathika ( Biggest Fan Of RCB )</span>
        </h2>
      ) : (
        // <h3>
        //   <span>
        //     <i class="fa-regular fa-heart"></i>
        //   </span>
        // </h3>
        <div className="container">
          <div className="loading" style={{ width: loaderWidth + "%" }}></div>
        </div>
      )}

      <input type="text" value={duration} onChange={handleChange} disabled={isRunning} />
      <br />
      <br />
      <div>
        {isRunning ? <button onClick={() => setIsRunning(false)}>Stop</button> : <button onClick={() => setIsRunning(true)}>Start</button>}
        <button onClick={() => setSeconds(duration)}>Reset</button>
      </div>
    </div>
  );
}
