import React, { useEffect, useRef, useState } from "react";
import "./ToDoProject.css";

const ToDoProject = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef();
  //   const currentTime = date.toLocaleTimeString();
  //   console.log(currentTime);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleAdd = (e) => {
    e.preventDefault();

    if (input === "") {
      return;
    } else {
      //   const currentDate = new Date();
      //   const formattedDate = currentDate.toLocaleDateString();
      //   const formattedTime = currentDate.toLocaleTimeString();

      //   setData((prev) => [...prev, { input: input, date: formattedDate, time: formattedTime }]);
      setData((prev) => [...prev, input]);
      setInput("");
      //   setDate(date);
    }
  };

  const remove = (indexToRemove) => {
    setData((prev) => prev.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input value={input} ref={inputRef} placeholder="Enter Ur Task ..." onChange={(e) => setInput(e.target.value)} />
        <button type="submit">ADD</button>
      </form>

      {data.map((x, index) => (
        <div key={index}>
          <p>
            <span>{index}</span> <i className="fa-solid fa-left-right"></i>
            {x} <i className="fa-solid fa-rectangle-xmark" onClick={() => remove(index)}></i>
            {/* {x.input} <i className="fa-solid fa-rectangle-xmark" onClick={() => remove(index)}></i>
            {x.date} - <span> {x.time} </span> */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ToDoProject;
