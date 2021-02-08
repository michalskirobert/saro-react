import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import { auth } from "./../../firebase";
import { userConstants } from "./../../../../_constants/user.constants";

const Login = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    return await auth.signOut();
  };

  useEffect(() => {
    logout();
    dispatch({ type: userConstants.LOGOUT });
    dispatch({ type: "SEE_LESS" });
  }, []);

  return (
    <section className="section login">
      <LoginForm />
    </section>
  );
};

export default Login;
