import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";

export const SaroRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const nav = useSelector(
    ({ database }: RootStateOrAny) => database?.init?.nav
  );

  const checkIsUserAuth = () => {
    if (nav.some((nav) => nav.pathname === currentPath)) return true;
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        return checkIsUserAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/not-auth-page"} />
        );
      }}
    />
  );
};
