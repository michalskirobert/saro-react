import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import { auth } from "../../firebase";
import { userActions } from "../../../../_actions";

const Login = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      dispatch(userActions.logout());
      await auth.signOut();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <section className="section login">
      <LoginForm />
    </section>
  );
};

export default Login;
