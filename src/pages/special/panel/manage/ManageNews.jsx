import React, { useEffect } from "react";
import { Breadcrumb, Modal, Button } from "react-bootstrap";

import { useManageContainer } from "./container";
import { useContainer } from "./../../../public/home/container";
import { CustomDataTable } from "@components/shared/custom-table";

import {
  TABLE_COLUMN_PROPERTIES,
  COLUMNS,
  tableColumnExtensions,
  BUTTONS_HELPER,
  BUTTON_ACTIONS
} from "../utils";
import * as C from "@utils/constants";

import * as S from "../style";
import "react-toastify/dist/ReactToastify.min.css";

const ManageNews = () => {
  const { getNews } = useContainer();
  const {
    setSelectedRowsId,
    showAlert,
    setShowAlert,
    deleteSelections,
    handleButtonActions,
    isAll,
    selectedRowId,
    setSelectedRowId,
    newsItems,
    isEditable,
    selectedRowsId,
    isLoading
  } = useManageContainer();

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="section saro-panel">
      <Breadcrumb>
        <Breadcrumb.Item href={C.ROUTE_PATHS.HOME_ROUTE}>{C.GENERAL_CONSTANTS.HOME}</Breadcrumb.Item>
        <Breadcrumb.Item href={C.ROUTE_PATHS.PANEL_ROUTE}>{C.GENERAL_CONSTANTS.ADMIN_PANEL}</Breadcrumb.Item>
        <Breadcrumb.Item active>{C.GENERAL_CONSTANTS.MANAGE_NEWS}</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="main-title">{C.GENERAL_CONSTANTS.MANAGE_NEWS}</h2>
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
                  status === BUTTON_ACTIONS.EDIT
                    ? isEditable(selectedRowId)
                    : status === BUTTON_ACTIONS.IS_ALL
                    ? false
                    : !isActive(selectedRowId),
              }}
            >
              {content}
            </S.TableButton>
          );
        }
      )}
        <Modal show={showAlert} onHide={() => setShowAlert(false)}>
        <Modal.Body>
          {C.GENERAL_CONSTANTS.DELETE_REQUEST_MESSAGE}
        </Modal.Body>
        <Modal.Footer>
        <Button variant={C.GENERAL_CONSTANTS.B_DANGER} onClick={deleteSelections}>
        {C.GENERAL_CONSTANTS.YES}
        </Button>
        <Button variant={C.GENERAL_CONSTANTS.B_DARK} onClick={() => setShowAlert(false)}>
        {C.GENERAL_CONSTANTS.NO}
        </Button>
        </Modal.Footer>
       
      </Modal>
      <CustomDataTable
        {...{
          rows: newsItems,
          columns: COLUMNS,
          tableColumnExtensions,
          dateColumns: [TABLE_COLUMN_PROPERTIES.MODIFIED, TABLE_COLUMN_PROPERTIES.PUBLISHED],
          checkboxSelection: !!isAll,
          isGrouping: false,
          isLoading,
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
