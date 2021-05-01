import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { db, auth, firestore } from "@fire";

import { PrivateRoute } from "./routers/PrivateRoute";
import { SaroRoute } from "./routers/SaroRoute";
import Unlisten from "./routers/Unlisten";
import { fetchActions, userActions } from "./store/actions";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import { DefaultLoader } from "./components/shared/loadings/DefaultLoader";
import { PUBLIC_ROUTE, PRIVATE_ROUTE, SARO_ROUTE } from "@utils/route";

import * as C from "@utils/constants";

const NotFound = lazy(() => import("./pages/public/404/Error"));

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.general.language);

  const getDictionary = async () => {
    try {
      dispatch(fetchActions.getDictionaryRequest);
      db.ref(`/${C.GENERAL_CONSTANTS.DICTIONARY}`).on(
        "value",
        (querySnapShot) => {
          dispatch(fetchActions.getDictionarySucces(querySnapShot.val()));
        }
      );
    } catch (error) {
      dispatch(fetchActions.getDictionaryFailure(error));
    }
  };

  const getDataHandler = async () => {
    try {
      dispatch(fetchActions.getDatabaseRequest);
      db.ref(`/${C.GENERAL_CONSTANTS.LANG}`)
        .child(language)
        .on("value", (querySnapShot) => {
          dispatch(fetchActions.getDatabaseSucces(querySnapShot.val()));
        });
    } catch (error) {
      dispatch(fetchActions.getDatabaseFailure(error));
    }
  };

  const initialDataHandler = async () => {
    await getDictionary();
    await getDataHandler();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        firestore
          .collection(C.GENERAL_CONSTANTS.USERS)
          .doc(user.uid)
          .onSnapshot((currentUser) => {
            dispatch(userActions.signInSuccess(currentUser.data()));
          });
      } else {
        dispatch(userActions.logout());
      }
    });
    return () => unsubscribe();
  });

  useEffect(() => {
    initialDataHandler();
  }, []);

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
