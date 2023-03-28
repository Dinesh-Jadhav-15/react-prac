import React, { useState } from "react";
import "./Details.css";

const Details = ({ name, email, password, gender, info }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="details-wrapper">
      <h2>Details</h2>
      <hr></hr>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Info</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{info}</td>
            <td>{password}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{info}</td>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </div>
  );
};

export default Details;
