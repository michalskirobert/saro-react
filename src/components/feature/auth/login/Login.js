import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { auth } from "./../../firebase";

const Login = () => {
  return (
    <section className="section login">
      <LoginForm />
      <div className="auth-control">
        <p>Do you have an account?</p>
      </div>
    </section>
  );
};

export default Login;
