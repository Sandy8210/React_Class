import React, { useReducer } from "react";

export default function UseReduce_object() {
  const initialState = {
    firstCounter: 0,
    SecondCounter: 0,
  };

  const reducer = (state, action) => {
    switch (action) {
      case "incr":
        return { ...state, firstCounter: state.firstCounter + 1 };

      case "decr":
        return { ...state, firstCounter: state.firstCounter - 1 };

      case "incr5":
        return { ...state, SecondCounter: state.SecondCounter + 5 };

      case "decr5":
        return { ...state, SecondCounter: state.SecondCounter - 5 };

      case "reset":
        return initialState;
      default:
        return this.state.first;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <br />
      <br />
      <br />
      <span> {count.firstCounter} </span>
      <br /> <br /> <br />
      <br />
      <br />
      <button onClick={() => dispatch("incr")}> + </button>
      <button onClick={() => dispatch("decr")}> - </button> <br />
      <br /> <br />
      <span> {count.SecondCounter}</span> <br /> <br /> <br />
      <br />
      <br />
      <button onClick={() => dispatch("incr5")}> +5 </button>
      <button onClick={() => dispatch("decr5")}> -5 </button>
      <br />
      <br /> <br />
      <br />
      <br />
      <button onClick={() => dispatch("reset")}> Clr </button>
    </>
  );
}
