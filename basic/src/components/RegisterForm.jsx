import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function RegisterForm() {
  const [regData, setRegData] = useState({});
  const [list, setList] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const [updateData, setUpdateData] = useState({});

  const url = "http://localhost:3002/register/";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  });

  function handleChange(e) {
    setRegData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  const handleData = (e) => {
    e.preventDefault();
    axios
      .post(url, regData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const deleteData = (delId, delname) => {
    axios
      .delete(`${url}${delId}`)
      .then((res) => alert(`Delete the ${delId} user ${delname}`))
      .catch((err) => console.log(err));
  };

  const dataUpdate = () => {
    setPopUp(true);
  };
  return (
    <>
      <div className="center">
        <h2>
          <span>Register</span>
        </h2>
        <form action="#" onSubmit={handleData}>
          <input type="number" name="id" placeholder="Enter your id" required onChange={handleChange} /> <br />
          <input type="text" name="name" placeholder="Enter your name" required onChange={handleChange} /> <br />
          <input type="number" name="age" placeholder="Enter your age" min="10" max="80" required onChange={handleChange} /> <br />
          <input type="number" name="mark" placeholder="Enter your mark" min="10" max="100" required onChange={handleChange} />
          <br />
          <button type="submit">Register</button>
        </form>

        <table border={2} cellPadding={2} cellSpacing={3}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Mark</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.age}</td>
                <td>{x.mark}</td>
                <td>
                  <button onClick={() => deleteData(x.id, x.name)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button onClick={() => dataUpdate(x)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="center"></div>
    </>
  );
}
