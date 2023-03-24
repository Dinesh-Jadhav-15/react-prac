import React, { useState } from "react";
import "./Forms.css";

function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Register(event) {
    event.preventDefault();
    console.log(
      "Registration Details : " + name + " " + email + " " + password + " "
    );
  }

  return (
    <div className="main-wrapper">
      <div className="main-block">
        <h1>Registration</h1>

        <form onSubmit={() => Register(event)}>
          <hr />
          <div className="account-type">
            <input
              type="radio"
              value="none"
              id="radioOne"
              name="account"
              checked
            />
            <label for="radioOne" className="radio">
              Personal
            </label>
            <input type="radio" value="none" id="radioTwo" name="account" />
            <label for="radioTwo" className="radio">
              Company
            </label>
          </div>
          <hr />
          <label id="icon" for="name">
            <i className="fas fa-envelope"></i>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label id="icon" for="name">
            <i className="fas fa-user"></i>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label id="icon" for="name">
            <i className="fas fa-unlock-alt"></i>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr />
          <div className="gender">
            <input type="radio" value="none" id="male" name="gender" checked />
            <label for="male" className="radio">
              Male
            </label>
            <input type="radio" value="none" id="female" name="gender" />
            <label for="female" className="radio">
              Female
            </label>
          </div>
          <hr />
          <div className="btn-block">
            <p>
              By clicking Register, you agree on our
              <a href="https://www.google.com/" target="_blank">
                Privacy Policy for Google.com
              </a>
              .
            </p>{" "}
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forms;
