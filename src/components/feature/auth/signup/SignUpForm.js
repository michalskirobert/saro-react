import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "./../../firebase";
import { saveAuthHeader } from "./../../../feature/auth/login/authHeader";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [userID, setUserID] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const signup = async (email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((doc) => {
        setUserID(doc.user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      console.log("you need to give an email");
    } else if (!password) {
      console.log("we need your password");
    } else if (password !== confPassword) {
      console.log("password need to be same with conf-password");
    } else {
      try {
        await signup(email, password);
        await firestore.collection("users").doc(userID).set({
          id: userID,
          email: email,
          name: "",
          surname: "",
          profilePicture: "",
          aboutUser: "",
          socialMedia: [],
          hobby: "",
          nativeOf: "",
          studying: "",
          role: "student",
        });
        saveAuthHeader({ isLogged: true });
        history.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="alert dangerous">
        <p>we need your something :)</p>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="conf-password">Confirm password :</label>
        <input
          type="password"
          id="conf-password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          required
        />
      </div>
      <button>Sign-in</button>
    </form>
  );
};

export default SignUpForm;
