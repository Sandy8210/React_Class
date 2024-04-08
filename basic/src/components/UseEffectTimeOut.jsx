import React, { useEffect, useState } from "react";

export default function UseEffectTimeOut() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      setCount(count + 1);
    }, 300);

    return () => {
      clearTimeout(time);
    };
  });
  return (
    <div>
      <p>
        <span>{count}</span>
      </p>
    </div>
  );
}
