import React, { useEffect, useState } from "react";

export default function TimerMsg() {
  const [val, setVal] = useState("");
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const breakInterval = setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => {
      clearInterval(breakInterval);
    };
  });

  useEffect(() => {
    const timeString = timer.toLocaleTimeString();
    if (timeString === "12:08:15 PM") {
      setVal("Happy Birthday sandy");
    }

    if (timeString === "12:08:20 PM") {
      setVal("");
    }
  }, [timer]);
  return (
    <div>
      <p>
        Time is :<span>{timer.toLocaleTimeString()}</span>
      </p>

      <p>
        <span>{val}</span>
      </p>
    </div>
  );
}
