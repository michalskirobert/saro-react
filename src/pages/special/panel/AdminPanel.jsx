import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Nav, Table, Button } from "react-bootstrap";
import ReactPaginate from 'react-paginate'

import { useContainer } from "../../public/home/container";
import { useEdit } from "../../special/edit/container";
import { firestore } from "../../../components/feature/firebase";
import CmsAlert from "./../../../components/shared/alerts/CmsAlert";

import * as C from "./../../../utils/constants";

const AdminPanel = () => {
  const { getNews, getEvents, getPosts } = useContainer();
  const { handleEdit } = useEdit();
 
  const newsItems = useSelector((state) => state.database.news);
  const newsEvents = useSelector((state) => state.database.events);
  const newsPosts = useSelector((state) => state.database.posts);
  const alert = useSelector((state) => state.CMS.alert);

  const itemsPerPage = 10;

  const [currentPageEvents, setCurrentPageEvents]=useState(0)  
  const [currentPageNews, setCurrentPageNews]=useState(0)  
  const [currentPagePosts, setCurrentPagePosts]=useState(0)  

  const offsetEvents = currentPageEvents * itemsPerPage;
  const offsetNews = currentPageNews * itemsPerPage;
  const offsetPosts = currentPagePosts * itemsPerPage;

  const currentPageEventsItems = newsEvents.slice(offsetEvents, offsetEvents + itemsPerPage)
  const currentPageNewsItems = newsItems.slice(offsetNews, offsetNews + itemsPerPage)
  const currentPagePostsItems = newsPosts.slice(offsetPosts, offsetPosts + itemsPerPage)

  const pageCountEvents = Math.ceil(newsEvents.length/itemsPerPage)
  const pageCountNews = Math.ceil(newsItems.length/itemsPerPage)
  const pageCountPosts = Math.ceil(newsPosts.length/itemsPerPage)

  const handleEventsPageChange = ({selected: selectedPage}) => {
    setCurrentPageEvents(selectedPage)
  }
  const handleNewsPageChange = ({selected: selectedPage}) => {
    setCurrentPageNews(selectedPage)
  }
  const handlePostsPageChange = ({selected: selectedPage}) => {
    setCurrentPagePosts(selectedPage)
  }

  const removeItem = async (id) => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.ENGLISH)
      .collection(C.GENERAL_CONSTANTS.EVENTS)
      .doc(id)
      .delete();
  };

  useEffect(() => {
    getNews();
    getEvents();
    getPosts();
  }, []);

  return (
    <section className="section saro-panel">
      {alert && <CmsAlert />}
      <h1>Saro CMS 1.0.0</h1>
      <Tabs defaultActiveKey="newContent" id="uncontrolled-tab-example">
        <Tab eventKey="newContent" title="Add new content">
          <Nav className="flex-column">
            <Nav.Link href="/panel/add/news-content">Add news</Nav.Link>
            <Nav.Link href="/panel/add/post">Add new blog post</Nav.Link>
            <Nav.Link href="/panel/add/events">Add new event</Nav.Link>
            <Nav.Link href="/panel/add/article">Add new article</Nav.Link>
          </Nav>
        </Tab>
        <Tab eventKey="menagment" title="Menage content">
          <Tabs defaultActiveKey="newContent">
            <Tab eventKey="newContent" title="News management">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Published date</th>
                    <th>Author</th>
                    <th>Menagement</th>
                  </tr>
                </thead>
                {currentPageNewsItems.map((post, index) => {
                  const { crew, title, published, id, type } = post;
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{index}</td>
                        <td>{title}</td>
                        <td>{published}</td>
                        <td>{crew}</td>
                        <td>
                          <Button
                            {...{
                              variant: "primary",
                              onClick: () => handleEdit(id, type),
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            {...{
                              variant: "danger",
                              onClick: () => removeItem(id),
                            }}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
              <ReactPaginate
           previousLabel={'< Previous'}
           nextLabel={'Next >'}
           breakLabel={'...'}
           breakClassName={'break'}
           onPageChange={handleNewsPageChange}
           pageCount={pageCountNews}
           containerClassName={'pagination'}
           previousLinkClassName={"pagination-link"}
           disabledClassName={"pagination-disabled"}
           nextLinkClassName={"pagination-link"}
           activeClassName={"pagination-active"}
        />
            </Tab>
            <Tab eventKey="eventsContent" title="Events menadżerrrooo">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Published date</th>
                    <th>Author</th>
                    <th>Menagement</th>
                  </tr>
                </thead>
                {currentPageEventsItems.map((post, index) => {
                  const { crew, title, published, id, type } = post;
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{index}</td>
                        <td>{title}</td>
                        <td>{published}</td>
                        <td>{crew}</td>
                        <td>
                          <Button
                            {...{
                              variant: "primary",
                              onClick: () => handleEdit(id, type),
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            {...{
                              variant: "danger",
                              onClick: () => removeItem(id, type),
                            }}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
              <ReactPaginate
          previousLabel={'< Previous'}
          nextLabel={'Next >'}
          breakLabel={'...'}
          breakClassName={'break'}
          onPageChange={handleEventsPageChange}
          pageCount={pageCountEvents}
          containerClassName={'pagination'}
          previousLinkClassName={"pagination-link"}
          disabledClassName={"pagination-disabled"}
          nextLinkClassName={"pagination-link"}
          activeClassName={"pagination-active"}
        />
            </Tab>
            <Tab eventKey="blogContent" title="Blog managment">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Published date</th>
                    <th>Author</th>
                    <th>Menagement</th>
                  </tr>
                </thead>
                {currentPagePostsItems.map((post, index) => {
                  const { crew, title, published, id, type } = post;
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{index}</td>
                        <td>{title}</td>
                        <td>{published}</td>
                        <td>{crew}</td>
                        <td>
                          <Button
                            {...{
                              variant: "primary",
                              onClick: () => handleEdit(id, type),
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            {...{
                              variant: "danger",
                              onClick: () => removeItem(id, type),
                            }}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
              <ReactPaginate
         previousLabel={'< Previous'}
         nextLabel={'Next >'}
         breakLabel={'...'}
         breakClassName={'break'}
         onPageChange={handlePostsPageChange}
         pageCount={pageCountPosts}
         containerClassName={'pagination'}
         previousLinkClassName={"pagination-link"}
         disabledClassName={"pagination-disabled"}
         nextLinkClassName={"pagination-link"}
         activeClassName={"pagination-active"}
        />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="menagmentOfCrew" title="Menage your profile" disabled>
          2
        </Tab>
        <Tab eventKey="menagmentOfPictrues" title="Menage pictrues" disabled>
          3
        </Tab>
      </Tabs>
    </section>
  );
};

export default AdminPanel;
