import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Breadcrumb } from "react-bootstrap";

import { useManage } from "./container";
import { useContainer } from "./../../../public/home/container";

import Edit from "@assets/images/components/forms/PencilLine.svg";
import Delete from "@assets/images/components/forms/Trash.svg";

const ManageArticles = () => {
  const { getPosts } = useContainer();

  const {
    paginate,
    totalCount,
    itemsPerPage,
    handleEdit,
    removeItem,
  } = useManage();

  const articleItems = useSelector((state) => state.database.posts);

  useEffect(() => {
    if (totalCount <= itemsPerPage) {
      paginate(1);
    }
    // eslint-disable-next-line
  }, [totalCount, itemsPerPage]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="section manage-articles">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
        <Breadcrumb.Item active>Manage articles</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="main-title">Manage articles</h2>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Last modified</th>
            <th>Author</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {articleItems.map((item) => {
            const { id, title, publishedDate, crew, type } = item;
            return (
              <tr key={id}>
                <td>[✓]</td>
                <td>{title}</td>
                <td>{publishedDate}</td>
                <td>{crew}</td>
                <td>
                  <Button
                    {...{
                      onClick: () => handleEdit(id, type),
                    }}
                  >
                    <img src={Edit} alt="Edit" />
                  </Button>
                  <Button
                    {...{
                      onClick: () => removeItem(type, id),
                    }}
                  >
                    <img src={Delete} alt="Delete" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};

export default ManageArticles;
