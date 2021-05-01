import React, { useEffect } from "react";
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

const ManageNews = () => {
  const { getNews } = useContainer();
  const {
    setKey,
    handleDeleteBtnClick,
    onChangePage,
    newsRows,
    setSelectedRowsId,
    showAlert,
    setShowAlert,
    handleDeleteSelected,
  } = useManageContainer();

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
      <S.TableButton onClick={handleDeleteBtnClick}>
        Delete Selected
      </S.TableButton>
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
          rows: newsRows,
          columns: COLUMNS,
          tableColumnExtensions: tableColumnExtentions,
          dateColumns: [TABLE_COLUMN_PROPERTIES.MODIFIED],
          checkboxSelection: true,
          onRowSelected: (rowId) => setSelectedRowsId(rowId),
          onChangePage: () => onChangePage(),
        }}
      />
    </section>
  );
};

export default ManageNews;
