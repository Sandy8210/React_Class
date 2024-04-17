import React, { useReducer } from "react";
// import "./App.css";
const initialState = 0;
 
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0;
        default:
            throw new Error("Unexpected action");
    }
};
 
const Count = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
 
    return (
        <div className="mainDiv">
            <h2>{count}</h2>
            <div className="btn">
                <button onClick={() => dispatch("add")}>Add</button>
                <button onClick={() => dispatch("subtract")}>Sub</button>
                <button onClick={() => dispatch("reset")}>Reset</button>
            </div>
        </div>
    );
};
 
export default Count;