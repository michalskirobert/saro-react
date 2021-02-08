import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth, firestore } from "./../../firebase";
import userActions from "./../../../../_actions/user.actions";
import alertActions from "./../../../../_actions/alert.actions";
import Alert from "./../../../shared/alerts";

const SignUpForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const alert = useSelector((state) => state.alert.alert);

  const signup = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(alertActions.clear());
    if (!emailRef.current.value) {
      dispatch(alertActions.error("Please type an email"));
    } else if (!passwordRef.current.value) {
      dispatch(alertActions.error("Please type your password"));
    } else if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      dispatch(
        alertActions.error(
          "Your confirming password is different with the current password"
        )
      );
    } else {
      signup(emailRef.current.value, passwordRef.current.value).then((req) => {
        firestore
          .collection("users")
          .doc(req.user.uid)
          .set({
            uid: req.user.uid,
            username: req.user.displayName,
            email: req.user.email,
            hobbies: "",
            firstName: "",
            lastName: "",
            nativeLang: "",
            studyingLang: "",
            about: "",
            createdAccount: new Date(),
            lastLogin: new Date(),
          })
          .catch((error) => {
            dispatch(alertActions.error(error.message));
          })
          .finally(() => {
            dispatch(userActions.signUp());
            history.push("/profile/settings");
          });
      });
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {alert && <Alert />}
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
