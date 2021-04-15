import React, { useEffect } from "react";
import { Table, Button, Pagination, Breadcrumb } from "react-bootstrap";
import Select from "react-select";

import { useManage } from "./container";
import { useContainer } from "./../../../public/home/container";

import Edit from "@assets/images/components/forms/PencilLine.svg";
import Delete from "@assets/images/components/forms/Trash.svg";

import * as C from "@utils/constants";

const ManageNews = () => {
  const { getNews } = useContainer();

  const {
    setKey,
    paginate,
    itemsPerPage,
    removeItem,
    setItemsPerPage,
    pagination,
    currentPage,
    paginatedNews,
    handleEdit,
    pageSize,
  } = useManage();

  useEffect(() => {
    getNews();
    setKey(C.GENERAL_CONSTANTS.NEWS);
  }, []);

  return (
    <section className="section manage-news">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
        <Breadcrumb.Item active>Manage news</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="main-title">Manage news</h2>
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
          {paginatedNews.map((item) => {
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
