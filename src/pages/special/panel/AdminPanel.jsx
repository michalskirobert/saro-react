import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Accordion, Card } from "react-bootstrap";

import { SaroRoute } from "./../../../routers/SaroRoute";
import { auth } from "@components/feature/firebase";
import CmsAlert from "@components/shared/alerts/CmsAlert";

import Hamburger from "@assets/images/components/nav/HamburgerBlack.svg";
import Cross from "@assets/images/components/nav/Cross.svg";

import AdminAddArticle from "./../add/AddArticle";
import AdminAddEvents from "./../add/AddEvents";
import AdminAddNews from "./../add/AddNews";
import TranslateFooter from "./translate/TranslateFooter";
import ManageNews from "./manage/ManageNews";
import ManageEvents from "./manage/ManageEvents";
import ManageArticles from "./manage/ManageArticles";
import AdminEdit from "./../edit/Edit";

import * as C from "@utils/constants";
import * as S from "./style";

const cmsNavData = [
  {
    title: "Admin Panel",
    path: "/panel",
    authFor: [
      C.userConstants.USER_STATUS_CREW,
      C.userConstants.USER_STATUS_DEVELOPER,
    ],
  },
  {
    title: "Add new content",
    authFor: [C.userConstants.USER_STATUS_DEVELOPER],
    content: [
      {
        title: "Add event",
        path: "/panel/add/events",
      },
      {
        title: "Add article",
        path: "/panel/add/article",
      },
      {
        title: "Add news",
        path: "/panel/add/news-content",
      },
    ],
  },
  {
    title: "Manage content",
    authFor: [C.userConstants.USER_STATUS_DEVELOPER],
    content: [
      {
        title: "Manage events",
        path: "/panel/manage/events",
      },
      {
        title: "Manage article",
        path: "/panel/manage/article",
      },
      {
        title: "Manage news",
        path: "/panel/manage/news-content",
      },
    ],
  },
  {
    title: "Translate content",
    authFor: [C.userConstants.USER_STATUS_DEVELOPER],
    content: [
      {
        title: "Translate footer",
        path: "/panel/translate/footer",
      },
    ],
  },
  {
    title: "Manage your profile",
    path: "/panel",
    authFor: [C.userConstants.USER_STATUS_DEVELOPER],
  },
  {
    title: "Manage pictures",
    path: "/panel",
    authFor: [C.userConstants.USER_STATUS_DEVELOPER],
  },
];

const AdminPanel = () => {
  const [isPanelNavOpen, setIsPanelNavOpen] = useState(false);

  const alert = useSelector((state) => state.CMS.alert);
  const userStatus = C.userConstants.USER_STATUS_DEVELOPER;

  const handleClick = () => {
    setIsPanelNavOpen(!isPanelNavOpen);
  };

  const authorize = (status) => {
    return cmsNavData.filter((item) => item.authFor.includes(status));
  };
  const authData = authorize(userStatus);

  return (
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
          <img src={Hamburger} alt="Menu" />
        </button>
        <div className="cms-wrapper">
          <Accordion
            defaultActiveKey="0"
            className={`${isPanelNavOpen && "active"}`}
          >
            {authData.map(({ title, path, content }, index) => {
              return (
                <Card>
                  {content ? (
                    <React.Fragment key={index}>
                      <Accordion.Toggle as={Card.Header} eventKey={index}>
                        {title}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                          {content.map(({ title, path }) => (
                            <Link to={path}>{title}</Link>
                          ))}
                        </Card.Body>
                      </Accordion.Collapse>
                    </React.Fragment>
                  ) : (
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}
                      key={index}
                    >
                      <Link style={{ color: "white" }} to={path}>
                        {title}
                      </Link>
                    </Accordion.Toggle>
                  )}
                </Card>
              );
            })}
          </Accordion>
          <button
            onClick={handleClick}
            className={`close ${isPanelNavOpen && "active"}`}
          >
            <img src={Cross} alt="Close" />
          </button>

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
            <SaroRoute
              exact
              path="/panel/manage/news-content"
              component={ManageNews}
            />
            <SaroRoute
              exact
              path="/panel/manage/article"
              component={ManageArticles}
            />
            <SaroRoute
              exact
              path="/panel/manage/events"
              component={ManageEvents}
            />
            <SaroRoute exact path="/panel/edit" component={AdminEdit} />
          </Switch>
        </div>
      </section>
      {isPanelNavOpen && <S.Overlay onClick={handleClick}></S.Overlay>}
    </Router>
  );
};

export default AdminPanel;
