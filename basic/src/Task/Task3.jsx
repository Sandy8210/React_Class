// import React, { useState } from "react";

// const Task3 = () => {
//   const [sel, setSel] = useState({ select1: "", select2: "" });
//   const [input, setInput] = useState({ input1: "", input2: "" });

//   let result1, result2;

//   const values = {
//     inr: {
//       inr: 1,
//       usd: 0.012,
//       aed: 0.044,
//     },
//     usd: {
//       inr: 83.33,
//       usd: 1,
//       aed: 3.67,
//     },
//     aed: {
//       inr: 22.87,
//       usd: 0.27,
//       aed: 1,
//     },
//   };

//   const handleChange = (e) => {
//     setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSelect = (e) => {
//     const { name, value } = e.target;
//     setSel((prev) => ({ ...prev, [name]: value }));

//     if (name === "select1" && sel.select2) {
//       result1 = value === "inr" ? input.input2 / values[sel.select2][value] : input.input2 * values[value][sel.select2];
//       setInput((prev) => ({ ...prev, input1: result1 }));

//       console.log("inside select1");
//     } else if (name === "select2" && sel.select1) {
//       console.log("inside select2");
//       result2 = value === "inr" ? input.input1 / values[sel.select1][value] : input.input1 * values[sel.select1][value];
//       setInput((prev) => ({ ...prev, input2: result2 }));
//     }
//   };

//   return (
//     <div>
//       <select name="select1" onChange={handleSelect}>
//         <option value="inr">INR</option>
//         <option value="usd">USD</option>
//         <option value="aed">AED</option>
//       </select>

//       <input type="number" name="input1" value={input.input1} onChange={handleChange} />

//       <h3>Value 1 is {result1}</h3>

//       <br />

//       <select name="select2" onChange={handleSelect}>
//         <option value="inr">INR</option>
//         <option value="usd">USD</option>
//         <option value="aed">AED</option>
//       </select>

//       <input type="number" name="input2" value={input.input2} onChange={handleChange} />

//       <h3>Value 2 is {result2}</h3>

//       <br />
//     </div>
//   );
// };

// export default Task3;

import React, { useState } from "react";

const Task3 = () => {
  const [sel, setSel] = useState({ select1: "", select2: "" });
  const [input, setInput] = useState({ input1: "", input2: "" });

  const values = {
    inr: {
      inr: 1,
      usd: 0.012,
      aed: 0.044,
    },
    usd: {
      inr: 83.33,
      usd: 1,
      aed: 3.67,
    },
    aed: {
      inr: 22.87,
      usd: 0.27,
      aed: 1,
    },
  };

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setSel((prev) => ({ ...prev, [name]: value }));

    if (name === "select1" && sel.select2) {
      const result = values[sel.select2][value] !== 0 ? input.input2 / values[sel.select2][value] : 0;
      setInput((prev) => ({ ...prev, input1: result }));
      console.log(`Converted value from ${sel.select2} to ${value}: ${result.toFixed(2)}`);
    } else if (name === "select2" && sel.select1) {
      const result = values[sel.select1][value] !== 0 ? input.input1 * values[sel.select1][value] : 0;
      setInput((prev) => ({ ...prev, input2: result }));
      console.log(`Converted value from ${sel.select1} to ${value}: ${result.toFixed(2)}`);
    }
  };

  return (
    <div>
      <select name="select1" onChange={handleSelect}>
        <option value="inr">INR</option>
        <option value="usd">USD</option>
        <option value="aed">AED</option>
      </select>

      <input type="number" name="input1" value={input.input1} onChange={handleChange} />

      <br />

      <select name="select2" onChange={handleSelect}>
        <option value="inr">INR</option>
        <option value="usd">USD</option>
        <option value="aed">AED</option>
      </select>

      <input type="number" name="input2" value={input.input2} onChange={handleChange} />

      <br />
    </div>
  );
};

export default Task3;
