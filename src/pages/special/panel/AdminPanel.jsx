import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Nav, Table, Button, Pagination } from "react-bootstrap";
import Select from "react-select";

import { useContainer } from "../../public/home/container";
import { useEdit } from "../../special/edit/container";
import { firestore, auth } from "@components/feature/firebase";
import CmsAlert from "@components/shared/alerts/CmsAlert";

import * as C from "@utils/constants";
import { pageSize } from "./utils";

const AdminPanel = () => {
  const { getNews, getEvents, getPosts } = useContainer();
  const { handleEdit } = useEdit();

  const newsItems = useSelector((state) => state.database?.news);
  const newsEvents = useSelector((state) => state.database?.events);
  const newsPosts = useSelector((state) => state.database?.posts);
  const alert = useSelector((state) => state.CMS.alert);

  const pagination = [];
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [key, setKey] = useState(C.GENERAL_CONSTANTS.NEWS_CONTENT);

  const totalCountValue = (key) => {
    if (key === C.GENERAL_CONSTANTS.NEWS_CONTENT) {
      return newsItems.length;
    }
    if (key === C.GENERAL_CONSTANTS.EVENTS_CONTENT) {
      return newsEvents.length;
    }
    if (key === C.GENERAL_CONSTANTS.BLOG_CONTENT) {
      return newsPosts.length;
    }
  };
  const totalCount = totalCountValue(key);

  const indexOfLastVisible = currentPage * itemsPerPage;
  const indexOfFirstVisible = indexOfLastVisible - itemsPerPage;

  const slicedNews = newsItems.slice(indexOfFirstVisible, indexOfLastVisible);
  const slicedEvents = newsEvents.slice(
    indexOfFirstVisible,
    indexOfLastVisible
  );
  const slicedPosts = newsPosts.slice(indexOfFirstVisible, indexOfLastVisible);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  for (
    let number = 1;
    number <= Math.ceil(totalCount / itemsPerPage);
    number++
  ) {
    pagination.push(number);
  }

  useEffect(() => {
    if (totalCount <= itemsPerPage) {
      paginate(1);
    }
  }, [totalCount, itemsPerPage]);

  const removeItem = async (type, id) => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.EN)
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
      <h2>
        Welcome{" "}
        <span style={{ color: "red" }}>
          {auth?.currentUser?.displayName ?? "Saro-crew"}
        </span>
      </h2>
      <Tabs defaultActiveKey="newContent" id="uncontrolled-tab-example">
        <Tab eventKey="newContent" title="Add new content">
          <Nav className="flex-column">
            <Nav.Link href="/panel/add/news-content">Add news</Nav.Link>
            <Nav.Link href="/panel/add/events">Add new event</Nav.Link>
            <Nav.Link href="/panel/add/article">Add new article</Nav.Link>
          </Nav>
        </Tab>
        <Tab eventKey="menagment" title="Menage content">
          <Tabs
            defaultActiveKey="newsContent"
            activeKey={key}
            onSelect={(key) => {
              setKey(key);
              paginate(1);
            }}
          >
            <Tab eventKey="newsContent" title="News management">
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
                {slicedEvents.map((post, index) => {
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
                {slicedPosts.map((post, index) => {
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
          </Tabs>
          <div className="pagination">
            <Pagination>
              {pagination.map((number) => {
                return (
                  <Pagination.Item
                    key={number}
                    onClick={() => paginate(number)}
                    active={number === currentPage}
                  >
                    {number}
                  </Pagination.Item>
                );
              })}
            </Pagination>
            <Select
              {...{
                id: "pageSize",
                name: "pageSize",
                placeholder: itemsPerPage,
                value: itemsPerPage,
                options: pageSize.map((size) => ({
                  label: size,
                  value: size,
                })),
                onChange: (options) => {
                  setItemsPerPage(options.value);
                },
              }}
            />
          </div>
        </Tab>
        <Tab eventKey="translateContent" title="Translate content">
          <Nav className="flex-column">
            <Nav.Link href="/panel/translate">Translate</Nav.Link>
          </Nav>
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
