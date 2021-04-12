import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";

import { useManage } from "./container";

import { Tr } from "./../style";

const ManageEvents = () => {
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
    removeItem,
  } = useManage();

  useEffect(() => {
    if (totalCount <= itemsPerPage) {
      paginate(1);
    }
    // eslint-disable-next-line
  }, [totalCount, itemsPerPage]);
  return (
    <Table striped bordered hover>
      <thead>
        <Tr>Manage events</Tr>
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
  );
};

export default ManageEvents;
