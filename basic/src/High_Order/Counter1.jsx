// import React from "react";
// import UpdatedComponent from "./Hoc";

// function Counter1(props) {
//   return (
//     <div>
//       <button onClick={props.countFunc}>Increment - {props.count}</button>
//     </div>
//   );
// }

// export default UpdatedComponent(Counter1);

import React from "react";
import UpdatedComponent from "./Hoc";

function Counter1(props) {
  return (
    <div>
      <button onClick={props.funct}>Increment - {props.count}</button>
    </div>
  );
}

export default UpdatedComponent(Counter1);
