import React from "react";


// Parameter pass using object destructuring .

export default function CounterOne({ count, countFunction }) {
  return (
    <div>
      <button onClick={countFunction}>CLick Count is : {count} </button>
    </div>
  );
}
