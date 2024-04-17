import React, { useMemo, useState } from "react";

export default function UsememoFunc() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <h2> {isEven ? "Even" : "Odd"}</h2> <br />
      <button onClick={() => setCount1(count1 + 1)}>Count 1 -- {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count 2 -- {count2}</button>
    </div>
  );
}
