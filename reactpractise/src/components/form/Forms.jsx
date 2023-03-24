import React, { useState } from "react";
import Details from "../details/Details";
import "./Forms.css";

function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [info, setInfo] = useState("personal");

  function Register(event) {
    event.preventDefault();
    console.log(
      "Registration Details : " + name + " " + email + " " + password + " "
    );
  }

  return (
    <>
      <div className="main-wrapper">
        <div className="main-block">
          <h1>Registration</h1>

          <form onSubmit={() => Register(event)}>
            <hr />
            <div className="account-type">
              <input
                type="radio"
                id="radioOne"
                name="account"
                value="personal"
                checked={info === "personal"}
                onChange={(e) => setInfo(e.target.value)}
              />
              <label for="radioOne" className="radio">
                Personal
              </label>
              <input
                type="radio"
                id="radioTwo"
                name="account"
                value="company"
                checked={info === "company"}
                onChange={(e) => setInfo(e.target.value)}
              />
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
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label for="male" className="radio">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label for="female" className="radio">
                Female
              </label>

              <input
                type="radio"
                id="transgender"
                name="gender"
                value="transgender"
                checked={gender === "transgender"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label for="transgender" className="radio">
                Transgender
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
      <Details
        name={name}
        email={email}
        password={password}
        gender={gender}
        info={info}
      />
    </>
  );
}

export default Forms;
