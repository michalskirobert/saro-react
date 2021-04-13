import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Pagination, Breadcrumb } from "react-bootstrap";
import Select from "react-select";

import { useManage } from "./container";
import { useContainer } from "./../../../public/home/container";
import { pageSize } from "./../utils";

import Edit from "@assets/images/components/forms/PencilLine.svg";
import Delete from "@assets/images/components/forms/Trash.svg";

const ManageNews = () => {
  const { getNews } = useContainer();

  const {
    handleEdit,
    removeItem,
  } = useManage();

  const newsItems = useSelector((state) => state.database.news);


  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="section manage-news">
      <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
            <Breadcrumb.Item active>Manage news</Breadcrumb.Item>
          </Breadcrumb>
      <h2 className="main-title">Manage news</h2>
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
          {newsItems.map((item) => {
            const { id, type, title, publishedDate, crew } = item;
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

export default ManageNews;