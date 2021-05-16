import React from "react";
import { Breadcrumb } from "react-bootstrap";

import { useManageContainer } from "./container";
import { CustomDataTable } from "@components/shared/custom-table";
import { CustomWarningModal } from "@components/shared/modals/custom-modal-warning";

import {
  BUTTONS_HELPER,
  BUTTON_ACTIONS,
  COLUMNS,
  TABLE_COLUMN_PROPERTIES,
} from "../utils";
import * as C from "@utils/constants";

import * as S from "../style";

const ManageNews = (): JSX.Element => {
  const {
    setSelectedRowsId,
    showAlert,
    setShowAlert,
    deleteSelections,
    handleButtonActions,
    isAll,
    selectedRowId,
    setSelectedRowId,
    news,
    isEditable,
    selectedRowsId,
    isLoading,
  } = useManageContainer();

  return (
    <section className={"section saro-panel"}>
      <Breadcrumb>
        <Breadcrumb.Item href={C.ROUTE_PATHS.HOME_ROUTE}>
          {C.GENERAL_CONSTANTS.HOME}
        </Breadcrumb.Item>
        <Breadcrumb.Item href={C.ROUTE_PATHS.PANEL_ROUTE}>
          {C.GENERAL_CONSTANTS.ADMIN_PANEL}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {C.GENERAL_CONSTANTS.MANAGE_NEWS}
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2 className={"main-title"}>{C.GENERAL_CONSTANTS.MANAGE_NEWS}</h2>
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
      {showAlert && (
        <CustomWarningModal
          {...{
            content: C.GENERAL_CONSTANTS.DELETE_REQUEST_MESSAGE,
            confirmMsg: C.GENERAL_CONSTANTS.YES,
            rejectMsg: C.GENERAL_CONSTANTS.NO,
            onSave: deleteSelections,
            onCancel: () => setShowAlert(false),
            onHide: () => setShowAlert(false),
          }}
        />
      )}
      <CustomDataTable
        {...{
          rows: !!news.length ? news : [],
          columns: COLUMNS,
          dateColumns: [
            TABLE_COLUMN_PROPERTIES.MODIFIED,
            TABLE_COLUMN_PROPERTIES.PUBLISHED,
          ],
          tableColumnExtensions: [],
          checkboxSelection: !!isAll,
          isGrouping: false,
          isLoading,
          showSelectionColumn: true,
          onRowSelected: (selectedRowId: string[]) =>
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
