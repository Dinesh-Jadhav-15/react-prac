import React from "react";
import "./Forms.css";

function Forms() {
  return (
    <div class="main-block">
      <h1>Registration</h1>
      <form action="/">
        <hr />
        <div class="account-type">
          <input
            type="radio"
            value="none"
            id="radioOne"
            name="account"
            checked
          />
          <label for="radioOne" class="radio">
            Personal
          </label>
          <input type="radio" value="none" id="radioTwo" name="account" />
          <label for="radioTwo" class="radio">
            Company
          </label>
        </div>
        <hr />
        <label id="icon" for="name">
          <i class="fas fa-envelope"></i>
        </label>
        <input type="text" name="name" id="name" placeholder="Email" required />
        <label id="icon" for="name">
          <i class="fas fa-user"></i>
        </label>
        <input type="text" name="name" id="name" placeholder="Name" required />
        <label id="icon" for="name">
          <i class="fas fa-unlock-alt"></i>
        </label>
        <input
          type="password"
          name="name"
          id="name"
          placeholder="Password"
          required
        />
        <hr />
        <div class="gender">
          <input type="radio" value="none" id="male" name="gender" checked />
          <label for="male" class="radio">
            Male
          </label>
          <input type="radio" value="none" id="female" name="gender" />
          <label for="female" class="radio">
            Female
          </label>
        </div>
        <hr />
        <div class="btn-block">
          <p>
            By clicking Register, you agree on our{" "}
            <a href="https://www.google.com/">Privacy Policy for Google.com</a>.
          </p>
          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
