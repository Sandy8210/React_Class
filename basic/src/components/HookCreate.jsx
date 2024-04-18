import React from "react";
import Create from "../Hook/Create";

export default function HookCreate() {
  const { val1, val2, onChange1, onChange2, add, result } = Create();

  return (
    <div>
      <input type="number" value={val1} onChange={onChange1} />
      <input type="number" value={val2} onChange={onChange2} />
      <button onClick={add}>
        Add <i class="fa-solid fa-plus"></i>
      </button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}
