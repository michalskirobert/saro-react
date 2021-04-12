import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Tabs,
  Tab,
  Nav,
  Table,
  Button,
  Pagination,
  Accordion,
  Card,
} from "react-bootstrap";
import Select from "react-select";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { SaroRoute } from "./../../../routers/SaroRoute";

import { useContainer } from "../../public/home/container";
import { useEdit } from "../../special/edit/container";
import { firestore, auth } from "@components/feature/firebase";
import CmsAlert from "@components/shared/alerts/CmsAlert";

import * as C from "@utils/constants";
import { pageSize } from "./utils";

import AdminAddArticle from "./../add/AddArticle";
import AdminAddEvents from "./../add/AddEvents";
import AdminAddNews from "./../add/AddNews";
import TranslateFooter from "./translate/TranslateFooter";
import ManageNews from './manage/ManageNews'

import { Tr } from "./style";

const AdminPanel = () => {
  const { getNews, getEvents, getPosts } = useContainer();
  const { handleEdit } = useEdit();


  const alert = useSelector((state) => state.CMS.alert);
  // const userStatus = useSelector(state => state.currentUser.status)
  const userStatus = C.userConstants.USER_STATUS_DEVELOPER;

 

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
          <div className="cms-wrapper">
            <Accordion defaultActiveKey="0" className="menu-container">
            <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                  <Link style={{color: "white"}} to="/panel">Admin Panel</Link>
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
              <SaroRoute exact path="/panel" >
                <p>Panel Main Page - COMING SOON</p>
              </SaroRoute>
              <SaroRoute exact path="/panel/add/article" component={AdminAddArticle} />
              <SaroRoute exact path="/panel/add/events" component={AdminAddEvents} />             
              <SaroRoute exact path="/panel/add/news-content" component={AdminAddNews} />        
              <SaroRoute exact path="/panel/translate/footer" component={TranslateFooter} />       
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

    // <Tabs defaultActiveKey="newContent" id="uncontrolled-tab-example">
    //   <Tab eventKey="newContent" title="Add new content">
    //     <Nav className="flex-column">
    //       <Nav.Link href="/panel/add/news-content">Add news</Nav.Link>
    //       <Nav.Link href="/panel/add/events">Add new event</Nav.Link>
    //       <Nav.Link href="/panel/add/article">Add new article</Nav.Link>
    //     </Nav>
    //   </Tab>
    //   <Tab eventKey="menagment" title="Menage content">
    //     <Tabs
    //       defaultActiveKey="newsContent"
    //       activeKey={key}
    //       onSelect={(key) => {
    //         setKey(key);
    //         paginate(1);
    //       }}
    //     >
    //       <Tab eventKey="newsContent" title="News management">
    //         <Table striped bordered hover>
    //           <thead>
    //             <tr>
    //               <th>#</th>
    //               <th>Title</th>
    //               <th>Published date</th>
    //               <th>Author</th>
    //               <th>Menagement</th>
    //             </tr>
    //           </thead>
    //           {slicedNews.map((post, index) => {
    //             const { crew, title, publishedDate, id, type } = post;
    //             return (
    //               <tbody key={id}>
    //                 <tr>
    //                   <td>{index}</td>
    //                   <td>{title}</td>
    //                   <td>{publishedDate}</td>
    //                   <td>{crew}</td>
    //                   <td>
    //                     <Button
    //                       {...{
    //                         variant: "primary",
    //                         onClick: () => handleEdit(id, type),
    //                       }}
    //                     >
    //                       Edit
    //                     </Button>
    //                     <Button
    //                       {...{
    //                         variant: "danger",
    //                         onClick: () => removeItem(type, id),
    //                       }}
    //                     >
    //                       Remove
    //                     </Button>
    //                   </td>
    //                 </tr>
    //               </tbody>
    //             );
    //           })}
    //         </Table>
    //       </Tab>
    //       <Tab eventKey="eventsContent" title="Events menadżerrrooo">
    //         <Table striped bordered hover>
    //           <thead>
    //             <tr>
    //               <th>#</th>
    //               <th>Title</th>
    //               <th>Published date</th>
    //               <th>Author</th>
    //               <th>Menagement</th>
    //             </tr>
    //           </thead>
    //           {slicedEvents.map((post, index) => {
    //             const { crew, title, publishedDate, id, type } = post;
    //             return (
    //               <tbody key={id}>
    //                 <tr>
    //                   <td>{index}</td>
    //                   <td>{title}</td>
    //                   <td>{publishedDate}</td>
    //                   <td>{crew}</td>
    //                   <td>
    //                     <Button
    //                       {...{
    //                         variant: "primary",
    //                         onClick: () => handleEdit(id, type),
    //                       }}
    //                     >
    //                       Edit
    //                     </Button>
    //                     <Button
    //                       {...{
    //                         variant: "danger",
    //                         onClick: () => removeItem(type, id),
    //                       }}
    //                     >
    //                       Remove
    //                     </Button>
    //                   </td>
    //                 </tr>
    //               </tbody>
    //             );
    //           })}
    //         </Table>
    //       </Tab>
    //       <Tab eventKey="blogContent" title="Blog managment">
    //         <Table striped bordered hover>
    //           <thead>
    //             <tr>
    //               <th>#</th>
    //               <th>Title</th>
    //               <th>Published date</th>
    //               <th>Author</th>
    //               <th>Menagement</th>
    //             </tr>
    //           </thead>
    //           {slicedPosts.map((post, index) => {
    //             const { crew, title, publishedDate, id, type } = post;
    //             return (
    //               <tbody key={id}>
    //                 <tr>
    //                   <td>{index}</td>
    //                   <td>{title}</td>
    //                   <td>{publishedDate}</td>
    //                   <td>{crew}</td>
    //                   <td>
    //                     <Button
    //                       {...{
    //                         variant: "primary",
    //                         onClick: () => handleEdit(id, type),
    //                       }}
    //                     >
    //                       Edit
    //                     </Button>
    //                     <Button
    //                       {...{
    //                         variant: "danger",
    //                         onClick: () => removeItem(type, id),
    //                       }}
    //                     >
    //                       Remove
    //                     </Button>
    //                   </td>
    //                 </tr>
    //               </tbody>
    //             );
    //           })}
    //         </Table>
    //       </Tab>
    //     </Tabs>
    //     <div className="pagination">
    //       <Pagination>
    //         {pagination.map((number) => {
    //           return (
    //             <Pagination.Item
    //               key={number}
    //               onClick={() => paginate(number)}
    //               active={number === currentPage}
    //             >
    //               {number}
    //             </Pagination.Item>
    //           );
    //         })}
    //       </Pagination>
    //       <Select
    //         {...{
    //           id: "pageSize",
    //           name: "pageSize",
    //           placeholder: itemsPerPage,
    //           value: itemsPerPage,
    //           options: pageSize.map((size) => ({
    //             label: size,
    //             value: size,
    //           })),
    //           onChange: (options) => {
    //             setItemsPerPage(options.value);
    //           },
    //         }}
    //       />
    //     </div>
    //   </Tab>
    //   <Tab eventKey="translateContent" title="Translate content">
    //     <Nav className="flex-column">
    //       <Nav.Link href="/panel/translate">Translate</Nav.Link>
    //     </Nav>
    //   </Tab>
    //   <Tab eventKey="menagmentOfCrew" title="Menage your profile" disabled>
    //     2
    //   </Tab>
    //   <Tab eventKey="menagmentOfPictrues" title="Menage pictrues" disabled>
    //     3
    //   </Tab>
    // </Tabs>
  );
};

export default AdminPanel;
