import React, { Suspense, lazy } from "react";
import {Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { PrivateRoute } from "./routers/PrivateRoute";
import { SaroRoute } from "./routers/SaroRoute";
import Unlisten from "./routers/Unlisten";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import { DefaultLoader } from "./components/shared/custom-loadings/DefaultLoader";
import {PRIVATE_ROUTE, PUBLIC_ROUTE, SARO_ROUTE } from "@utils/route";

import { useInitialService } from "./core/service";

import * as C from "@utils/constants";

const NotFound = lazy(() => import("./pages/public/404/Error"));

const App = () => {
  const { currentPage } = useInitialService();
  return (
    <Router>
      <Unlisten>
        <Nav />
        <Suspense fallback={<DefaultLoader />}>
          <Switch>
            {PUBLIC_ROUTE.map(({ path, component, exact }) => {
              return <Route key={path} {...{ path, component, exact }} />;
            })}
            {PRIVATE_ROUTE.map(({ path, component, exact }) => {
              return (
                <PrivateRoute key={path} {...{ path, component, exact }} />
              );
            })}
            {SARO_ROUTE.map(({ path, component, exact }) => {
              return <SaroRoute key={path} {...{ path, component, exact }} />;
            })}
            <Route {...{ path: C.ROUTE_PATHS.ERROR, component: NotFound }} />
          </Switch>
        </Suspense>
        <Footer />
      </Unlisten>
    </Router>
  );
};

export default App;