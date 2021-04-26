import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Table, Button, Pagination, Breadcrumb } from "react-bootstrap";

import { useManage } from "./container";
import { useContainer } from "./../../../public/home/container";

import Edit from "@assets/images/components/forms/PencilLine.svg";
import Delete from "@assets/images/components/forms/Trash.svg";

import * as C from "@utils/constants";

const ManageEvents = () => {
  const { getEvents } = useContainer();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const {
    setKey,
    paginate,
    itemsPerPage,
    removeItem,
    setItemsPerPage,
    pagination,
    currentPage,
    paginatedEvents,
    handleEdit,
    pageSize,
  } = useManage();

  const handleCheckboxChange = (id) => {
    if(selectedItems.includes(id)){
      console.log("item found and deleted")
      const newArray = selectedItems.filter(item => item !== id) 
      setSelectedItems(newArray)
      console.log({newArray})
    } else {
      console.log("item added")
      const newSelectedItems = [...selectedItems, id];
      const uniqeItems = [...new Set(newSelectedItems)];
      setSelectedItems(uniqeItems);
      console.log({uniqeItems})
    }    
  }

  useEffect(() => {
    getEvents();
    setKey(C.GENERAL_CONSTANTS.EVENTS);
  }, []);

  const deleteSelected = () => {
    selectedItems.map((item) => console.log(`${item} deleted`));
  };

  return (
    <section className="section manage-events">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
        <Breadcrumb.Item active>Manage events</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="main-title">Manage events</h2>
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
      <Button type="button" onClick={deleteSelected}>
        Delete selected
      </Button>
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
          {paginatedEvents.map((item) => {
            const { id, type, title, publishedDate, crew } = item;
            return (
              <tr key={id}>
                <td>
                  <input 
                    {...{                    
                      type: "checkbox",
                      onClick: ()=> {                        
                        handleCheckboxChange(id)
                      }
                    }}
                  />
                </td>
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

export default ManageEvents;
