// import React, { useState } from "react";

// const UpdatedComponent = (OriginalComponent) => {

//   function NewComponent(props) {
//     const [count, setCount] = useState(0);

//     const incr = () => {
//       setCount(count + 1);
//     };

//     return <OriginalComponent name="Sandy" count={count} countFunc={incr} {...props} />;
//   }

//   return NewComponent;
// };

// export default UpdatedComponent;

import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [count, setCount] = useState(0);

    function incr() {
      setCount(count + 1);
    }

    return <OriginalComponent count={count} funct={incr} {...props} />;
  }
  return NewComponent;
};

export default UpdatedComponent;
