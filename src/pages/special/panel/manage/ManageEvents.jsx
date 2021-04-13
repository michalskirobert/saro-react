import React, { useEffect } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import { Table, Button, Pagination, Breadcrumb } from "react-bootstrap";

import { firestore } from "@components/feature/firebase";

import { useManage } from "./container";
import { useContainer } from "./../../../public/home/container";
import { useEdit } from "./../../edit/container";
import { pageSize } from "./../utils";

import Edit from "@assets/images/components/forms/PencilLine.svg";
import Delete from "@assets/images/components/forms/Trash.svg";

import * as C from "@utils/constants";

const ManageEvents = () => {
  const { getEvents } = useContainer(); 
  const { handleEdit } = useEdit();
  const eventItems = useSelector((state) => state.database?.events); 

  const {
    paginate,
    totalCount,
    itemsPerPage,
  } = useManage();  

   useEffect(()=>{
    getEvents();
  }, [])

  useEffect(() => {
    if (totalCount <= itemsPerPage) {
      paginate(1);
    }
    // eslint-disable-next-line
  }, [totalCount, itemsPerPage]);  

  const removeItem = async (type, id) => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.EN)
      .collection(type)
      .doc(id)
      .delete();
  };

  return (
    <section className="section manage-events">
      <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
            <Breadcrumb.Item active>Manage events</Breadcrumb.Item>
          </Breadcrumb>
      <h2 className="main-title">Manage events</h2>
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
          {eventItems.map((item) => {
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
      {/* <div className="pagination">       
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
      </div> */}
    </section>
  );
};

export default ManageEvents;
