import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth } from "./../../firebase";
import { userConstants } from "./../../../../_constants/user.constants";
import { alertConstants } from "./../../../../_constants/alert.constants";
import Alert from "./../../../shared/alerts";
import { alertActions } from "./.../../../../../../_actions";

const SignUpForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const signup = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRef.current.value) {
      dispatch({ type: alertConstants.ERROR, payload: "Please type an email" });
    } else if (!passwordRef.current.value) {
      dispatch({ type: alertConstants.ERROR, payload: "Please type an email" });
    } else if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      console.log("password need to be same with conf-password");
    } else {
      try {
        await signup(emailRef.current.value, passwordRef.current.value);
        dispatch({ type: userConstants.REGISTER_SUCCESS });
        history.push("/profile/settings");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign-up</h2>
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
      <div className="form-control">
        <label htmlFor="conf-password" className="floatLabel">
          Confirm password :
        </label>
        <input
          type="password"
          id="conf-password"
          ref={confirmPasswordRef}
          required
        />
      </div>
      <button type="submit">Sign-in</button>
      <div className="auth-control">
        <p style={{ display: "inline" }}>Do you have an account?</p>{" "}
        <Link to="/sign-in">Sign-in</Link>
      </div>
    </form>
  );
};

export default SignUpForm;
