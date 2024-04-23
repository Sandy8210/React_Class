import React from "react";

export default function CounterOne(props) {
  return (
    <div>
      <button onClick={props.countFunction}>CLick Count is : {props.count} </button>
    </div>
  );
}
