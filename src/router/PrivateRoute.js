import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <Route
      {...rest}
      render={(props) => {
        return user.isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        );
      }}
    ></Route>
  );
};
