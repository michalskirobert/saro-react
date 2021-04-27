// Components:
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { db, auth } from "@fire";

import { PrivateRoute } from "./routers/PrivateRoute";
import { SaroRoute } from "./routers/SaroRoute";
import Unlisten from "./routers/Unlisten";
import { firestore } from "./components/feature/firebase";
import SignIn from "./components/feature/auth/login/Login";
import SignUp from "./components/feature/auth/signup/SignUp";
import { fetchActions, userActions } from "./store/actions";
import Nav from "./components/layout/nav/Nav";
import Footer from "./components/layout/footer/Footer";
// Pages

//Public
import Home from "./pages/public/home/Home";
import About from "./pages/public/about/About";
import Lessons from "./pages/public/lessons/Lessons";
import Blog from "./pages/public/blog/Blog";
import Error from "./pages/public/404/Error";
import Contact from "./pages/public/contact";

//User-space
import Dashboard from "./pages/private/dashboard/Dashboard";
import ProfileSettings from "./pages/private/profile/Settings";
import User from "./pages/private/profile/User";

//Special
import AdminEdit from "./pages/special/edit/Edit";
import AdminAddArticle from "./pages/special/add/AddArticle";
import AdminAddEvents from "./pages/special/add/AddEvents";
import AdminAddNews from "./pages/special/add/AddNews";
import AdminDashboard from "./pages/special/panel/AdminPanel";
import AdminTranslate from "./pages/special/edit/AdminTranslate";
import AdminTranslateFooter from "./pages/special/panel/translate/TranslateFooter";
import AdminManageArticle from "./pages/special/panel/manage/ManageArticles";
import AdminManageNews from "./pages/special/panel/manage/ManageNews";
import AdminManageEvents from "./pages/special/panel/manage/ManageEvents";

import * as C from "@utils/constants";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.general.language);

  const getDataHandler = () => {
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
    return () => {
      unsubscribe();
    };
  });

  useEffect(() => {
    getDataHandler();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Unlisten>
        <Nav />
        <Switch>
          {/* Public Router */}
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/lessons" component={Lessons} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          {/* User route */}
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={User} />
          <PrivateRoute path="/profile/settings" component={ProfileSettings} />
          <PrivateRoute path="/profile/:id" children={<User />} />
          {/* CMS SARO 1.0.0 */}
          <SaroRoute exact path="/panel" component={AdminDashboard} />
          <SaroRoute
            exact
            path="/panel/add/article"
            component={AdminAddArticle}
          />
          <SaroRoute
            exact
            path="/panel/add/events"
            component={AdminAddEvents}
          />
          <SaroRoute exact path="/panel/add/news" component={AdminAddNews} />
          <SaroRoute
            exact
            path="/panel/manage/article"
            component={AdminManageArticle}
          />
          <SaroRoute
            exact
            path="/panel/manage/events"
            component={AdminManageEvents}
          />
          <SaroRoute
            exact
            path="/panel/manage/news"
            component={AdminManageNews}
          />
          <SaroRoute exact path="/panel/edit" component={AdminEdit} />
          <SaroRoute exact path="/panel/translate" component={AdminTranslate} />
          <SaroRoute
            exact
            path="/panel/translate/footer"
            component={AdminTranslateFooter}
          />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Unlisten>
    </Router>
  );
};

export default App;
