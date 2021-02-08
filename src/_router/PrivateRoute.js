import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let user = useSelector((state) => state.currentUser);
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
