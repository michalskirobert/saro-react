import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import { auth } from "../../firebase";
import { userActions } from "@actions/index";
import { ReactComponent as ArrowBack } from "@assets/images/components/forms/arrowBack.svg";
import * as C from "@utils/constants";

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
    <section className={"section login"}>
      <Link {...{ to: C.ROUTE_PATHS.HOME_ROUTE }} className={"arrow-back-icon"}>
        <ArrowBack />
      </Link>

      <LoginForm />
    </section>
  );
};

export default Login;
