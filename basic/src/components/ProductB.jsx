import React, { useContext } from "react";
import { ShoppingContext } from "./ShoppingCart";

export default function ProductB({ content2 }) {
  const ProductB = useContext(ShoppingContext);
  return (
    <div>
      <button
        onClick={() => {
          ProductB.dispatch("productINC2");
          ProductB.setContent2(true);
        }}
      >
        Product B
      </button>
      {/* <button onClick={()=>{content2(setContent(false))}}>chg</button> */}
    </div>
  );
}
