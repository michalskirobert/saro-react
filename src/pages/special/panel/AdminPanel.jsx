import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Nav, Table, Button } from "react-bootstrap";
import { useContainer } from "../../public/home/container";
import { firestore } from "../../../components/feature/firebase";

const AdminPanel = () => {
  const { getNews } = useContainer();
  const newsItems = useSelector((state) => state.news.posts);

  const removeItem = async (id) => {
    return await firestore
      .collection("language")
      .doc("en")
      .collection("news")
      .doc(id)
      .delete();
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="section saro-panel">
      <h1>Saro CMS 1.0.0</h1>
      <Tabs defaultActiveKey="newContent" id="uncontrolled-tab-example">
        <Tab eventKey="newContent" title="Add new content">
          <Nav className="flex-column">
            <Nav.Link href="/panel/add/news-content">Add news</Nav.Link>
            <Nav.Link href="/panel/add/post" disabled>
              Add new blog post
            </Nav.Link>
            <Nav.Link href="/panel/add/event" disabled>
              Add new event
            </Nav.Link>
            <Nav.Link href="/panel/add/events">
              Add new event
            </Nav.Link>
            <Nav.Link href="/panel/add/article">
              Add new article
            </Nav.Link>
          </Nav>
        </Tab>
        <Tab eventKey="menagment" title="Menage content">
          <Nav className="flex-row" eventKey="news">
            <Nav.Link eventKey="news" title="Edit news">
              Edit navgation
            </Nav.Link>
            <Nav.Link href="/panel/edit/nav" disabled>
              Edit navgation
            </Nav.Link>
            <Nav.Link href="/panel/edit/general" disabled>
              Edit general stuff
            </Nav.Link>
          </Nav>
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
            {newsItems.map((post, index) => {
              const { author, title, date, id } = post;
              return (
                <tbody key={id}>
                  <tr>
                    <td>{index}</td>
                    <td>{title}</td>
                    <td>{date}</td>
                    <td>{author}</td>
                    <td>
                      <Button variant="primary" disabled>
                        Edit
                      </Button>
                      <Button variant="danger" onClick={() => removeItem(id)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
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
