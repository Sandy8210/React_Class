import React from "react";

export default function CounterTwo(props) {
  return (
    <div>
      <h1 onMouseOver={props.countFunction}>Hover Count is : {props.count}</h1>
    </div>
  );
}
