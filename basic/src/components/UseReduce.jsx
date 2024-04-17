import React, { useReducer } from "react";

export default function UseReduce() {
  const initialState = 0;

  const reduce = (state, action) => {
    switch (action) {
      case "increment":
        if (state < 5) {
          console.log(state);
          return state + 1;
        } else {
          return state;
        }

      case "decrement":
        if (state > 0) {
          return state - 1;
        } else {
          return state;
        }

      case "reset":
        return initialState;

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reduce, initialState);
  return (
    <div>
      <h2>
        <span> {count} </span>
      </h2>
      <button onClick={() => dispatch("increment")}>Increament</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}
