import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Password Should be 6 characters or more.");
      return;
    }
    if (password !== confirm) {
      setError("Your Password did not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <p className="text-error">{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
