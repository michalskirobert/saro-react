import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth } from "./../../firebase";
import { userActions, alertActions } from "./../../../../_actions";
import Alert from "./../../../shared/alerts";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert.alert);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(alertActions.clear());
    if (email && password) {
      try {
        await signin(email, password);
        dispatch(userActions.request());
        history.push("/dashboard");
      } catch (error) {
        dispatch(alertActions.error(error.message));
      }
    } else {
      return dispatch(
        alertActions.error("Please type email and password to sign-in")
      );
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {alert && <Alert />}
      <h2>Sign-in</h2>
      <div className="form-control">
        <label htmlFor="email" className="floatLabel">
          Email :
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="password" className="floatLabel">
          Password :
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign-in</button>
      <div className="auth-control">
        <p style={{ display: "inline" }}>Don't have an account?</p>
        <Link to="/sign-up"> Create</Link>
        <p style={{ display: "inline" }}>
          {" "}
          or did you forget your password?
        </p>{" "}
        <Link to="/reset">Reset your password</Link>
      </div>
    </form>
  );
};

export default LoginForm;
