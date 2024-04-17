import React from "react";

function Title() {
  console.log();
  return (
    <div>
      <h3>Title Component</h3>
    </div>
  );
}

export default React.memo(Title);
