import React, { useEffect } from "react";
import Select from "react-select";
import { Table, Button, Pagination } from "react-bootstrap";

import { pageSize } from "./../utils";
import { useManage } from "./container";

import { Tr } from "./../style";


const ManageNews = () => {
  const {
    paginate,
    totalCount,
    itemsPerPage,
    slicedNews,
    slicedEvents,
    slicedPosts,
    newsItems,
    newsEvents,
    handleEdit,
    newsPosts,
    pagination,
    setItemsPerPage,
    currentPage,
    getNews,
    getEvents,
    getPosts,
    removeItem,
  } = useManage();

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (totalCount <= itemsPerPage) {
      paginate(1);
    }
    // eslint-disable-next-line
  }, [totalCount, itemsPerPage]);

  return (
    <Table striped bordered hover>
      <thead>
        <Tr>Manage news</Tr>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Published date</th>
          <th>Author</th>
          <th>Menagement</th>
        </tr>
      </thead>
      {newsItems.map((post, index) => {
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
    </Table>
  );
};

export default ManageNews;

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
