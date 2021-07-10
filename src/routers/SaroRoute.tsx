import React from "react";
import { Redirect, Route } from "react-router-dom";

export const SaroRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return true ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/not-auth-page"} />
        );
      }}
    />
  );
};
