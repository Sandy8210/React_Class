import React from "react";
function Button(props) {
  console.log(`Button page ${props.display}`);
  return (
    <div>
      <button onClick={props.func}>Click Me....</button>
    </div>
  );
}

export default React.memo(Button);
