import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { auth, firestore } from "./../../firebase";
import { userActions, alertActions } from "../../../../store/actions";
import Alert from "./../../../shared/alerts";

import { DefaultLoader } from "./../../../shared/loadings/DefaultLoader";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("male");
  const [nativeLang, setNativeLang] = useState("English");
  const [studyingLang, setStudyingLang] = useState("Polish");
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.currentUser.isLoading);

  const alert = useSelector((state) => state.alert.alert);

  const signup = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const updateUserProfile = async (username, picture) => {
    if (auth.currentUser) {
      return await auth.currentUser.updateProfile({
        displayName: username,
        photoURL: picture,
      });
    } else {
      return console.error("it doesn't work");
    }
  };

  const createUserDataBase = async (user) => {
    return await firestore.collection("users").doc(auth.currentUser.uid).set({
      id: user.uid,
      username: user.displayName,
      email: user.email,
      gender: gender,
      native: nativeLang,
      studying: studyingLang,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(alertActions.clear());
    if (!email) {
      dispatch(alertActions.error("Please type an email"));
    } else if (!password) {
      dispatch(alertActions.error("Please type your password"));
    } else if (password !== confPassword) {
      dispatch(
        alertActions.error(
          "Your confirming password is different with the current password"
        )
      );
    } else {
      try {
        await signup(email, password);
        await updateUserProfile(username, "https://via.placeholder.com/50px");
        await createUserDataBase(auth.currentUser);
        dispatch(userActions.signUp());
        history.push("/profile/settings");
      } catch (error) {
        dispatch(alertActions.error(error.message));
      }
    }
  };

  if (isLoading) {
    return <DefaultLoader />;
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {alert && <Alert />}
      <h2>Register</h2>
      <div className="form-control">
        <label htmlFor="username" className="floatLabel"></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="jane_example123"
          tabindex="1"
        />
      </div>
      <div className="form-control">
        <label htmlFor="email" className="floatLabel">
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="jane@example.com"
          tabindex="2"
        />
      </div>
      <div className="form-control--gender">
        <label htmlFor="gender" className="gender">
          Gender :
        </label>
        <select id="gender" 
          onChange={(e) => setGender(e.target.value)} 
          tabindex="3">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-control--lang">
        <label htmlFor="nativeLang" className="lang">
          Your native language
        </label>
        <select id="nativeLang" 
          onChange={(e) => setNativeLang(e.target.value)} 
          tabindex="4">
          <option value="English">English</option>
        </select>
      </div>
      <div className="form-control--lang">
        <label htmlFor="studyingLang" className="lang">
          Your studying language
        </label>
        <select
          id="studyingLang"
          onChange={(e) => setStudyingLang(e.target.value)}
          tabindex="5"
        >
          <option value="Polish">Polish</option>
        </select>
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
          tabindex="6"
        />
      </div>
      <div className="form-control">
        <label htmlFor="conf-password" className="floatLabel"></label>
        <input
          type="password"
          id="conf-password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          required
          placeholder="••••••••••••"
          tabindex="7"
        />
      </div>
      <button type="submit">Next</button>
      <div className="auth-control">
        <p style={{ display: "inline" }}>Do you have an account?</p>{" "}
        <Link to="/sign-in">Log-in</Link>
      </div>
    </form>
  );
};

export default SignUpForm;
