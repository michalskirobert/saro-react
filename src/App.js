// Components:
import React, { useEffect } from "react";
import { auth, firestore } from "./components/feature/firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/layout/nav/Nav";
import Sidebar from "./components/layout/nav/Sidebar";
import Footer from "./components/layout/footer/Footer";
import { PrivateRoute } from "./_router/PrivateRoute";
import { SaroRoute } from "./_router/SaroRoute";
import Unlisten from "./_router/Unlisten";
import SignIn from "./components/feature/auth/login/Login";
import SignUp from "./components/feature/auth/signup/SignUp";
import { userActions } from "./_actions";

// Pages

//Public
import Home from "./pages/public/home/Home";
import About from "./pages/public/about/About";
import Profile from "./pages/public/about/Profile";
import Lessons from "./pages/public/lessons/Lessons";
import Lesson from "./pages/public/lessons/SIngleLesson";
import Blog from "./pages/public/blog/Blog";
import SingleArticle from "./pages/public/blog/SingleArticle";
import Error from "./pages/public/404/Error";
import Contact from "./pages/public/contact";

//User
import Dashboard from "./pages/private/dashboard/Dashboard";
import ProfileProgress from "./pages/private/profile/Progress";
import ProfileSettings from "./pages/private/profile/Settings";
import User from "./pages/private/profile/User";

//Special
import AdminEdit from "./pages/special/edit/Edit";
import AdminAddArticle from "./pages/special/add/AddArticle";
import AdminAddContent from "./pages/special/add/AddContent";
import AdminDashboard from "./pages/special/panel/AdminPanel";
import AdminTranslate from "./pages/special/edit/AdminTranslate";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        firestore
          .collection("users")
          .doc(user.uid)
          .onSnapshot((currentUser) => {
            dispatch(userActions.signIn(currentUser.data()));
          });
      } else {
        dispatch(userActions.logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Unlisten>
        <Nav />
        <Sidebar />
        <Switch>
          {/* Public Router */}
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/lessons" component={Lessons} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/about/profile/:id" children={<Profile />} />
          <Route path="/lessons/:id/:title" children={<Lesson />} />
          <Route path="/blog/article/:id/:title" children={<SingleArticle />} />
          {/* User route */}
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={User} />
          <PrivateRoute path="/profile/progress" component={ProfileProgress} />
          <PrivateRoute path="/profile/settings" component={ProfileSettings} />
          <PrivateRoute path="/profile/:id" children={<User />} />
          {/* Special route */}
          <SaroRoute exact path="/panel" component={AdminDashboard} />
          <SaroRoute path="/panel/add-article" component={AdminAddArticle} />
          <SaroRoute path="/panel/add-content" component={AdminAddContent} />
          <SaroRoute path="/panel/edit" component={AdminEdit} />
          <SaroRoute path="/panel/translate" component={AdminTranslate} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Unlisten>
    </Router>
  );
};

export default App;
