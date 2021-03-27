import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Nav, Table, Button } from "react-bootstrap";
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

  const itemsPerPage = 2;
  const [lastVisible, setLastVisible]= useState(itemsPerPage)
  const [currentPage, setCurrentPage]=useState(0) 

  console.log(currentPage) 
  console.log(lastVisible)
  
  const pageCount = Math.ceil(newsEvents.length)


  const handlePageChange = ({selected: selectedPage}) => {  
    setCurrentPage(selectedPage)  
    console.log(selectedPage)
    const last = itemsPerPage * lastVisible + 1
    setLastVisible(last)
   
  }

//   let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

// const paginationBasic = (
//   <div>
//     <Pagination>{items}</Pagination>
//     <br />

//     <Pagination size="lg">{items}</Pagination>
//     <br />

//     <Pagination size="sm">{items}</Pagination>
//   </div>
// );

// render(paginationBasic);

// pagination = []
// totalCount: lenght;
// currentPage: 1,
// pageSize: [20,50],
// for (let i of array){
// push do pagination
// }

  

  const removeItem = async (id) => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.ENGLISH)
      .collection(C.GENERAL_CONSTANTS.EVENTS)
      .doc(id)
      .delete();
  };

  useEffect(() => {
    // getNews();
    getEvents();
    // getPosts();
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
                {newsItems.map((post, index) => {
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
          onPageChange={handlePageChange}
          pageCount={pageCount}
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
                {newsPosts.map((post, index) => {
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
