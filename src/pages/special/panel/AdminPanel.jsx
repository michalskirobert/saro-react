import React, { useState } from "react";
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


const AdminPanel = () => {
  const [isPanelNavOpen, setIsPanelNavOpen] = useState(false);
  const cmsNavData = useSelector(state=>state.database?.init?.nav[0]?.content) 

  const alert = useSelector((state) => state.CMS.alert);
  const userStatus = C.userConstants.USER_STATUS_DEVELOPER;

  const handleClick = () => {
    setIsPanelNavOpen(!isPanelNavOpen);
  };

  const authorize = (status) => {
    return cmsNavData?.filter((item) => {      
      if(!item.status) {
        return item
      }            
      return item.status.includes(status)});
  };
  const authCmsNavData = authorize(userStatus);

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
            {authCmsNavData?.map(({ title, path, subcontent }, index) => {
              return (
                <Card>
                  {subcontent ? (
                    <React.Fragment key={index}>
                      <Accordion.Toggle as={Card.Header} eventKey={index}>
                        {title}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                          {subcontent.map(({ title, path }) => (
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
