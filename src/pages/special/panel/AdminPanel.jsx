import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Card } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { SaroRoute } from "./../../../routers/SaroRoute";

import { useContainer } from "../../public/home/container";
import { useEdit } from "../../special/edit/container";
import { auth } from "@components/feature/firebase";
import CmsAlert from "@components/shared/alerts/CmsAlert";

import Hamburger from "@assets/images/components/nav/HamburgerBlack.svg";
import Cross from "@assets/images/components/nav/CrossBlack.svg";

import * as C from "@utils/constants";

import AdminAddArticle from "./../add/AddArticle";
import AdminAddEvents from "./../add/AddEvents";
import AdminAddNews from "./../add/AddNews";
import TranslateFooter from "./translate/TranslateFooter";
import ManageNews from "./manage/ManageNews";

import { Tr } from "./style";

const AdminPanel = () => {
  const { getNews, getEvents, getPosts } = useContainer();
  const { handleEdit } = useEdit();
  const [isPanelNavOpen, setIsPanelNavOpen] = useState(false);

  const alert = useSelector((state) => state.CMS.alert);
  const userStatus =  useSelector(state => state.currentUser.status) || C.userConstants.USER_STATUS_DEVELOPER;

  useEffect(() => {
    getNews();
    getEvents();
    getPosts();
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <Router>
        <section className="section saro-panel">
          {alert && <CmsAlert />}
          <h1>Saro CMS 1.0.0</h1>
          <h2>
            Welcome{" "}
            <span style={{ color: "red" }}>
              {auth?.currentUser?.displayName ?? "Saro-crew"}
            </span>
          </h2>
          <button
            className="hamburger"
            onClick={() => {
              setIsPanelNavOpen(!isPanelNavOpen);
            }}
          >
            {isPanelNavOpen ? (
              <img src={Cross} alt="Close" />
            ) : (
              <img src={Hamburger} alt="Menu" />
            )}
          </button>
          <div className="cms-wrapper">
            <Accordion defaultActiveKey="0" className={`${isPanelNavOpen && 'active'}`} >
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <Link style={{ color: "white" }} to="/panel">
                    Admin Panel
                  </Link>
                </Accordion.Toggle>
              </Card>
              {userStatus === C.userConstants.USER_STATUS_DEVELOPER ? (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Add new content
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Link to="/panel/add/events">Add event</Link>
                      <Link to="/panel/add/article">Add article</Link>
                      <Link to="/panel/add/news-content">Add news</Link>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ) : null}
              {userStatus === C.userConstants.USER_STATUS_DEVELOPER ? (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Manage content
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Link to="/panel/manage/events">Manage Events</Link>
                      <Link to="/panel/manage/article">Manage Articles</Link>
                      <Link to="/panel/manage/news-content">Manage News</Link>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ) : null}
              {userStatus === C.userConstants.USER_STATUS_DEVELOPER ? (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Translate content
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <Link to="/panel/translate/footer">Translate footer</Link>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ) : null}

              {userStatus === C.userConstants.USER_STATUS_DEVELOPER ? (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Manage your profile
                  </Accordion.Toggle>
                </Card>
              ) : null}

              {userStatus === C.userConstants.USER_STATUS_DEVELOPER ? (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    Manage pictures
                  </Accordion.Toggle>
                </Card>
              ) : null}
            </Accordion>

            <Switch>
              <SaroRoute exact path="/panel">
                <section className="panel-main">
                  <p>Panel Main Page - COMING SOON</p>
                </section>
              </SaroRoute>
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
              <SaroRoute
                exact
                path="/panel/add/news-content"
                component={AdminAddNews}
              />
              <SaroRoute
                exact
                path="/panel/translate/footer"
                component={TranslateFooter}
              />
              <SaroRoute exact path="/panel/manage/news-content">
                <p>manage news</p>
              </SaroRoute>
              <SaroRoute exact path="/panel/manage/article">
                <p>manage articles</p>
              </SaroRoute>
              <SaroRoute exact path="/panel/manage/events">
                <p>manage events</p>
              </SaroRoute>
            </Switch>
          </div>
        </section>
      </Router>
    </>
  );
};

export default AdminPanel;
