import React, { useReducer } from "react";


export default function UC_reducer() 
{
    const initialState = 0;

    const reducer = (state, action) => {
      switch (action) {
        case "incr":
          return state + 1;
        case "decr":
          return state - 1;
        case "reset":
          return initialState;
        default:
          return state;
      }
    };
  
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>UC_reducer</div>
  )
}
