// import React from "react";
// import UpdatedComponent from "./Hoc";

// function Counter2(props) {
//   return (
//     <h2 onMouseOver={props.countFunc}>
//       {props.name} -- {props.count}
//     </h2>
//   );
// }

// export default UpdatedComponent(Counter2);

import React from "react";
import UpdatedComponent from "./Hoc";

function Counter2(props) {
  return (
    <div>
      <h3 onMouseOver={props.funct}>
        Count Value is : {props.count} {props.name}
      </h3>
    </div>
  );
}

export default UpdatedComponent(Counter2);
