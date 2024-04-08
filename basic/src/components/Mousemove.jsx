import React, { useEffect, useState } from "react";

export default function Mousemove() {
  const [toggle, setToggle] = useState(true);
  const [xval, setXval] = useState(0);
  const [yval, setYval] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", axislog);

    return () => {
      window.removeEventListener("mousemove", axislog);
    };
  }, []);

  const axislog = (e) => {
    // console.log("mouse moved");
    setXval(e.clientX);
    setYval(e.clientY);
  };

  return (
    <div>
      <p>
        X - axis : <span>{xval}</span>
      </p>
      <p>
        Y - axis : <span>{yval}</span>
      </p>
    </div>
  );
}
