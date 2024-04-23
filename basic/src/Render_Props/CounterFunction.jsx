import React, { useState } from "react";

export default function CounterFunction(props) {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };
  return <div>{props.render(count, incr)}</div>;
}
