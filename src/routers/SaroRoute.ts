import React from "react";
import { Redirect, Route } from "react-router-dom";

export const SaroRoute = ({ component: Component, ...rest }) => {
  const currentUser = true;
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        );
      }}
    ></Route>
  );
};
