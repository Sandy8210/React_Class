import React, { useState } from "react";

function Admin() {
  const [createBtn, setCreateBtn] = useState(true);

  const showList = () => {
    setCreateBtn(false);
  };

  const showAdmin = () => {
    setCreateBtn(true);
  };

  const [data, setData] = useState({});
  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, data]);
    alert("Successfully added");
    console.log(employees);
  };

  if (createBtn) {
    return (
      <>
        <h1>
          <span> Employee Management </span>
        </h1>

        <div className="btn">
          <button>Create</button>
          <button onClick={showList}>Read</button>
        </div>

        <div className="__form">
          <form action="">
            <input onChange={(e) => handleChange(e)} type="text" name="id" placeholder="Id" />
            <br />
            <input onChange={(e) => handleChange(e)} type="text" placeholder="name" name="name" />
            <br />
            <select onChange={(e) => handleChange(e)} name="job">
              <option value="SelectJob">SelectJobType</option>
              <option value="PartTime">PartTime</option>
              <option value="FullTime">FullTime</option>
            </select>
            <br />
            <button onClick={handleSubmit}>Add Employee</button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>
          {" "}
          <span> Employee List </span>
        </h1>

        <div className="btn">
          <button onClick={showAdmin}>Create</button>
          <button>Read</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Job Type</td>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Admin;
