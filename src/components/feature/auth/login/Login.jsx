import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import { auth } from "../../firebase";
import { userActions } from "../../../../store/actions";
import { ReactComponent as ArrowBack } from "@assets/images/components/forms/arrowBack.svg";

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
  });

  return (
    <section className="section login">
      <Link to="/">
        <button className="arrow-back-icon" type="button">
          <ArrowBack />
        </button>
      </Link>

      <LoginForm />
    </section>
  );
};

export default Login;
