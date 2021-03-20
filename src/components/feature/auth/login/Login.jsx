import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import LoginForm from "./LoginForm";
import { auth } from "../../firebase";
import { userActions } from "../../../../store/actions";
import { ReactComponent as ArrowBack } from "../../../../assets/images/components/forms/arrowBack.svg";

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
      <button className="arrow-back-icon" type="button">
        {" "}
        <ArrowBack />
      </button>

      <LoginForm />
    </section>
  );
};

export default Login;
