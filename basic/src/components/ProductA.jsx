import React, { useContext } from "react";
import { ShoppingContext } from "./ShoppingCart";

export default function ProductA() {
  const ProductA = useContext(ShoppingContext);
  return (
    <div>
      <button
        onClick={() => {
          ProductA.dispatch("productINC1");
          ProductA.setContent2(false);
        }}
      >
        Product A
      </button>
    </div>
  );
}
