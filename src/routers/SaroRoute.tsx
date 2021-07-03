import React from "react";
// import { RootStateOrAny, useSelector } from "react-redux";
import { Redirect, Route} from "react-router-dom";

export const SaroRoute = ({ component: Component, ...rest }) => {
  // const location = useLocation();
  // const currentPath = location.pathname;
  // const nav  = useSelector(({ database }: RootStateOrAny) => database.init.nav);

  return (
    <Route
      {...rest}
      render={(props) => {
        return true ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/sign-in"} />
        );
      }}
    />
  );
};
