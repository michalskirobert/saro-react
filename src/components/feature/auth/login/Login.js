import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { auth } from "./../../firebase";
import { saveAuthHeader } from "./authHeader";

const Login = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    return await auth.signOut();
  };

  useEffect(() => {
    logout();
    dispatch({ type: "LOG_OUT" });
    dispatch({ type: "SEE_MORE" });
  }, []);

  return (
    <section className="section login">
      <h1>Sign-in</h1>
      <LoginForm />
      <div className="auth-control">
        <p>Do you have an account?</p>
      </div>
    </section>
  );
};

export default Login;
