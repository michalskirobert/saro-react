import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "./../../firebase";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    if (email && password) {
      try {
        await signup(email, password);
        await firestore.collection("users").doc(userID).set({
          id: userID,
          email: email,
        });
        dispatch({ type: "SIGN_UP" });
        history.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Sign-in</button>
    </form>
  );
};

export default SignUpForm;
