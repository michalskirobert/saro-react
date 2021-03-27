import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Nav, Table, Button, Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

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

  const pagination = [];
  const itemsPerPage = 3;
  let currentPage = 1;

  const totalCount = newsEvents.length;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const indexOfLastVisible = currentPage * itemsPerPage;
  const indexOfFirstVisible = indexOfLastVisible - itemsPerPage;

  const slicedNews = newsEvents.slice(indexOfFirstVisible, indexOfLastVisible);

  for (let number = 1; number <= 5; number++) {
    pagination.push(
      <Pagination.Item key={number} active={number === currentPage}>
        {number}
      </Pagination.Item>
    );
  }

  const removeItem = async (type, id) => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.ENGLISH)
      .collection(type)
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
                {slicedNews.map((post, index) => {
                  const { crew, title, publishedDate, id, type } = post;
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{index}</td>
                        <td>{title}</td>
                        <td>{publishedDate}</td>
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
                              onClick: () => removeItem(type, id),
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
              <div>
                <Pagination>{pagination}</Pagination>
              </div>
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
                {newsEvents.map((post, index) => {
                  const { crew, title, publishedDate, id, type } = post;
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{index}</td>
                        <td>{title}</td>
                        <td>{publishedDate}</td>
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
                              onClick: () => removeItem(type, id),
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
                {newsPosts.map((post, index) => {
                  const { crew, title, published, id, type } = post;
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{index}</td>
                        <td>{title}</td>
                        <td>{new Date(published).toLocaleString()}</td>
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
                              onClick: () => removeItem(type, id),
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
