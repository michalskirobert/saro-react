import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Accordion, Card } from "react-bootstrap";

import { SaroRoute } from "./../../../routers/SaroRoute";
import { auth } from "@components/feature/firebase";
import CmsAlert from "@components/shared/alerts/CmsAlert";

import AdminAddArticle from "./../add/AddArticle";
import AdminAddEvents from "./../add/AddEvents";
import AdminAddNews from "./../add/AddNews";
import TranslateFooter from "./translate/TranslateFooter";
import ManageNews from "./manage/ManageNews";
import ManageEvents from "./manage/ManageEvents";
import ManageArticles from "./manage/ManageArticles";
import AdminEdit from "./../edit/Edit";

const AdminPanel = () => {
  const cmsNavData = useSelector(state=>state.database?.init?.nav[0]?.content) 
  const user = useSelector((state) => state.currentUser); 
  const alert = useSelector((state) => state.CMS.alert);

  const filterNavData = () => {
    return cmsNavData && cmsNavData.filter(item => !item.status || item?.status?.includes(+user?.status))
  }
  const filteredData = filterNavData()

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
        <div className="cms-wrapper">
          <Accordion
            defaultActiveKey="0"            
          >
            {filteredData?.map(({ title, path, subcontent }, index) => {
              return (                
                <Card key={index}>
                  {subcontent ? (
                    <React.Fragment key={index} >
                      <Accordion.Toggle as={Card.Header} eventKey={index}>
                        {title}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                        {subcontent.map(({path, title}, index) => {
                                return path ? (<Link key={index} className="inner-links" to={path}>{title}</Link>) : (<button className="inner-links-btn" key={index}>{title}</button>)
                              })}
                        </Card.Body>
                      </Accordion.Collapse>
                    </React.Fragment>
                  ) : (
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={index}     
                      key={index}                 
                    >
                      <Link className="link" to={path}>
                        {title}
                      </Link>
                    </Accordion.Toggle>
                  )}
                </Card>               
              );
            })}
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
              path="/panel/add/news"
              component={AdminAddNews}
            />
            <SaroRoute
              exact
              path="/panel/translate/footer"
              component={TranslateFooter}
            />
            <SaroRoute
              exact
              path="/panel/manage/news"
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
    </Router>
  );
};

export default AdminPanel;
