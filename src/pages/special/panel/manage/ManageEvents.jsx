import React, { useEffect, useState } from "react";
import { Breadcrumb, Alert, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { useManageContainer } from "./container";
import { useContainer } from "./../../../public/home/container";
import { CustomDataTable } from "@components/shared/custom-table";

import {
  TABLE_COLUMN_PROPERTIES,
  COLUMNS,
  tableColumnExtentions,
} from "../utils";
import * as C from "@utils/constants";
import * as S from "../style";

const ManageEvents = () => {
  const {
    setKey,
    handleDeleteBtnClick,
    onChangePage,
    setSelectedRowsId,
    eventRows,
    showAlert,
    setShowAlert,
    handleDeleteSelected,
  } = useManageContainer();
  const { getEvents } = useContainer();

  useEffect(() => {
    getEvents();
    setKey(C.GENERAL_CONSTANTS.EVENTS);
  }, []);

  return (
    <section className="section manage-events">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
        <Breadcrumb.Item active>Manage events</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="main-title">Manage events</h2>
      <S.TableButton onClick={handleDeleteBtnClick}>
        Delete Selected
      </S.TableButton>
      <ToastContainer autoClose={false} />
      <Alert variant="warning" show={showAlert}>
        <S.AlertMessage>
          Are you sure you want to delete selected items?
        </S.AlertMessage>
        <Button variant="danger" onClick={handleDeleteSelected}>
          Yes
        </Button>
        <Button variant="dark" onClick={() => setShowAlert(false)}>
          No
        </Button>
      </Alert>

      <CustomDataTable
        {...{
          rows: eventRows,
          columns: COLUMNS,
          tableColumnExtensions: tableColumnExtentions,
          dateColumns: [TABLE_COLUMN_PROPERTIES.MODIFIED],
          checkboxSelection: true,
          onRowSelected: (rowId) => setSelectedRowsId(rowId),
          onChangePage: (page, size) => onChangePage(page, size),
        }}
      />
    </section>
  );
};

export default ManageEvents;
