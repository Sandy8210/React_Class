import React from "react";
import ReactDOM from "react-dom";

export default function Portal() {
  return ReactDOM.createPortal(
    <div>
      <h3>Hello Sandy ... !</h3>
    </div>,
    document.getElementById("portal")
  );
}
