import React, { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState("");
  const [print, setPrint] = useState(false);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      const updatedDate = new Date();
      console.log(date.toLocaleTimeString());
      setDate(updatedDate);
      setCurrentTime(updatedDate.toLocaleTimeString());
    }, 1000);

    // Clear the interval after 1 minute (60000 milliseconds)
    setTimeout(() => {
      clearInterval(interval);
      setPrint(true);
      //   console.log("cleared");
    }, 60000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div>
      <p>Current Time: {currentTime}</p>

      {print && <h1> Expired</h1>}
    </div>
  );
};

export default Time;
