import React from "react";

export default function Product(props) {
  
  if (props.name === "Nokia") {
    throw new Error(" Sorry da vennai ! ...");
  }

  return (
    <div>
      <h3 className="error">{props.name}</h3>
    </div>
  );
}
