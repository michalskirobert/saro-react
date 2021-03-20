import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { auth } from "./../../firebase";
import { userActions, alertActions } from "../../../../store/actions";
import Alert from "./../../../shared/alerts";
import { DefaultLoader } from "./../../../shared/loadings/DefaultLoader";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert.alert);
  const isLoading = useSelector((state) => state.currentUser.isLoading);
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

  if (isLoading) {
    return <DefaultLoader />;
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {alert && <Alert />}
      <h2>Log in</h2>
      <div className="form-control">
        <label htmlFor="email" className="floatLabel"></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="jane@example.com"
        />
      </div>
      <div className="form-control">
        <label htmlFor="password" className="floatLabel"></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••••••"
        />
      </div>
      <button type="submit">LOG IN</button>
      <div className="auth-control">
        <Link className="create-account-link" to="/sign-up">
          Create an account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
