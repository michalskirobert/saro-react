import React from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <section className="section signup">
      <h1>Sign-up</h1>
      <SignUpForm />
      <div className="auth-control">
        <p>Do you have an account?</p>
      </div>
    </section>
  );
};

export default SignUp;
