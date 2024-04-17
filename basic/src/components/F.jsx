import React, { useContext } from "react";
import { CountContext } from "../App";

export default function F() {
  const count = useContext(CountContext);
  return (
    <div>
      <h4>F</h4>
      <button onClick={() => count.dispatch("incr")}>
        <i className="fa-solid fa-plus"></i>
      </button>
      <button onClick={() => count.dispatch("decr")}>
        <i className="fa-solid fa-minus"></i>
      </button>
      <button onClick={() => count.dispatch("reset")}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
