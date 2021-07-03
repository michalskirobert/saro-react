import React from "react";
// import { RootStateOrAny, useSelector } from "react-redux";
import { Redirect, Route} from "react-router-dom";

export const SaroRoute = ({ component: Component, ...rest }) => {
  // const location = useLocation();
  // const currentPath = location.pathname;
  // const nav  = useSelector(({ database }: RootStateOrAny) => database.init.nav);
  //Ściągnij z navMenu dane
  //Porównaj currentPathname z pathnames z nawigacji i dodaj mu isTrue boolean do stałej, którą opeerujesz jako kondycje przy sprawdzaniu dla komponentu.
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
