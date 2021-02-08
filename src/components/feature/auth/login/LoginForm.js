import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth } from "./../../firebase";
import userActions from "./../../../../_actions/user.actions";
import alertActions from "./../../../../_actions/alert.actions";
import Alert from "./../../../shared/alerts";

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert.alert);

  const signin = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(alertActions.clear());
    if (emailRef.current.value && passwordRef.current.value) {
      try {
        dispatch(userActions.checkSignIn());
        await signin(emailRef.current.value, passwordRef.current.value);
        history.push("/dashboard");
      } catch (error) {
        dispatch(alertActions.error(error.message));
      }
    } else {
      return dispatch({
        type: "ALERT_ERROR",
        payload: "We need your email and password",
      });
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
        <input type="email" id="email" ref={emailRef} required />
      </div>
      <div className="form-control">
        <label htmlFor="password" className="floatLabel">
          Password :
        </label>
        <input type="password" id="password" ref={passwordRef} required />
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
