import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "./../../firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (e) => {
    e.prevent.default();
    if (email && password) {
      try {
        await signin(email, password);
        history.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("type some value");
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

export default LoginForm;
