import React, { useReducer, useState } from "react";
import ProductA from "./ProductA";
import ProductB from "./ProductB";

export const ShoppingContext = React.createContext();

export default function ShoppingCart() {
  const initialState = {
    firstcart: 0,
    secondcart: 0,
  };
  const [content2, setContent2] = useState(false);

  const cart = (state, action) => {
    switch (action) {
      case "productINC1":
        return { ...state, firstcart: state.firstcart + 1 };
      case "productINC2":
        return { ...state, secondcart: state.secondcart + 1 };
      case "productDEC1":
        return { ...state, firstcart: state.firstcart - 1 };
      case "productDEC2":
        return { ...state, secondcart: state.secondcart - 1 };
      default:
        return state;
    }
  };

  const [cartValue, dispatch] = useReducer(cart, initialState);
  //   const [cartValue2,dispatch2] = useReducer(cart,initialState)

  return (
    <div>
      {content2 ? <div><h2> Product B - {cartValue.secondcart}</h2> 
      <button onClick={()=>{setContent2(false)}}>Remove</button> 
      <button onClick={()=>dispatch('productDEC2')}>Decrease</button>
      </div>: <div><h2> Product A - {cartValue.firstcart}</h2>
      <button onClick={()=>{setContent2(true)}}>Remove</button> 
      <button onClick={()=>dispatch('productDEC1')}>Decrease</button></div>}

      <ShoppingContext.Provider value={{ cartValue, dispatch, content2, setContent2 }}>
        <ProductA />
        <ProductB />
      </ShoppingContext.Provider>
    </div>
  );
}
