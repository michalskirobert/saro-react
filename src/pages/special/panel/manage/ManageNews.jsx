import React, { useEffect } from "react";
import { Breadcrumb, Alert, Button } from "react-bootstrap";

import { useManageContainer } from "./container";
import { useContainer } from "./../../../public/home/container";
import { CustomDataTable } from "@components/shared/custom-table";

import {
  TABLE_COLUMN_PROPERTIES,
  COLUMNS,
  tableColumnExtensions,
  BUTTONS_HELPER,
} from "../utils";
import * as C from "@utils/constants";

import * as S from "../style";
import "react-toastify/dist/ReactToastify.min.css";

const ManageNews = () => {
  const { getNews } = useContainer();
  const {
    setKey,
    setSelectedRowsId,
    showAlert,
    setShowAlert,
    handleDeleteSelected,
    handleButtonActions,
    isAll,
    selectedRowId,
    setSelectedRowId,
    newsItems,
    isEditable,
    selectedRowsId,
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
      {BUTTONS_HELPER.map(
        ({ content, color, action, isActive, type, status }, index) => {
          return (
            <S.TableButton
              key={index}
              {...{
                onClick: () => handleButtonActions(action),
                variant: color,
                type,
                disabled:
                  status === "EDIT"
                    ? isEditable(selectedRowId)
                    : status === "IS_ALL"
                    ? false
                    : !isActive(selectedRowId),
              }}
            >
              {content}
            </S.TableButton>
          );
        }
      )}

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
          rows: newsItems,
          columns: COLUMNS,
          tableColumnExtensions,
          dateColumns: [TABLE_COLUMN_PROPERTIES.MODIFIED],
          checkboxSelection: !!isAll,
          isGrouping: false,
          loading: true,
          showSelectionColumn: true,
          onRowSelected: (selectedRowId) =>
            !isAll
              ? setSelectedRowId(selectedRowId[0])
              : setSelectedRowsId(selectedRowId),
          initSelection: selectedRowsId,
        }}
      />
    </section>
  );
};

export default ManageNews;
