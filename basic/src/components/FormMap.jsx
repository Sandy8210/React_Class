import React, { useState } from "react";

const FormMap = () => {
  const [input, setInput] = useState({});
  const [data, setData] = useState([]);

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, input]);
    console.log(input);
  };
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input type="number" placeholder="id" name="id" onChange={handleInput} />
        <input type="text" placeholder="name" name="name" onChange={handleInput} />
        <input type="text" placeholder="role" name="role" onChange={handleInput} />
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormMap;
