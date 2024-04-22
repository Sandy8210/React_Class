import { useState } from "react";

function Create() {
  
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [result, setResult] = useState(null);

  const onChange1 = (e) => {
    setVal1(e.target.value);
  };

  const onChange2 = (e) => {
    setVal2(e.target.value);
  };

  const add = () => {
    setResult(Number(val1) + Number(val2));
  };

  return { val1, val2, onChange1, onChange2, add, result };
}

export default Create;
