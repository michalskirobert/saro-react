import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { PrivateRoute } from "./routers/PrivateRoute";
import { SaroRoute } from "./routers/SaroRoute";
import Unlisten from "./routers/Unlisten";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import { DefaultLoader } from "./components/shared/custom-loadings/DefaultLoader";
import { PRIVATE_ROUTE, PUBLIC_ROUTE, SARO_ROUTE } from "@utils/route";

import { useInitialService } from "./core/service";

import * as C from "@utils/constants";

const App = () => {
  useInitialService();
  const isAuthorizedUser = window.location.pathname.includes(C.ROUTE_PATHS.NOT_AUTH_PAGE);
  const history = createBrowserHistory();

  return (
    <Router {...{history}}>
      <Unlisten>
       {!isAuthorizedUser && <Nav />}
        <Suspense fallback={<DefaultLoader />}>
          <Switch>
            {PUBLIC_ROUTE.map(({ path, component, exact }) => {
              return (
                <Route key={path} {...{ path, component, exact: !!exact }} />
              );
            })}
            {PRIVATE_ROUTE.map(({ path, component, exact }) => {
              return (
                <PrivateRoute key={path} {...{ path, component, exact }} />
              );
            })}
            {SARO_ROUTE.map(({ path, component, exact }) => {
              return <SaroRoute key={path} {...{ path, component, exact }} />;
            })}
          </Switch>
        </Suspense>
      {!isAuthorizedUser &&  <Footer />}
      </Unlisten>
    </Router>
  );
};

export default App;
