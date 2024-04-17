import React from "react";

function Display(props) {
  console.log(`Display Page ${props.display}`);
  return <div>Age is : {props.name}</div>;
}

export default React.memo(Display);
