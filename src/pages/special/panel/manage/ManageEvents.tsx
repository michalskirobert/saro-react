import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

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

const ManageEvents = () => {
  const {
    setSelectedRowsId,
    showAlert,
    setShowAlert,
    deleteSelections,
    handleButtonActions,
    isAll,
    selectedRowId,
    setSelectedRowId,
    events,
    isEditable,
    selectedRowsId,
    isLoading,
  } = useManageContainer();

  return (
    <section className={"section saro-panel"}>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href={C.ROUTE_PATHS.HOME_ROUTE}>{C.GENERAL_CONSTANTS.HOME}</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href={C.ROUTE_PATHS.PANEL_ROUTE}>
            {C.GENERAL_CONSTANTS.ADMIN_PANEL}
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          {C.GENERAL_CONSTANTS.MANAGE_EVENTS}
        </BreadcrumbItem>
      </Breadcrumb>
      <h2 className={"main-title"}>{C.GENERAL_CONSTANTS.MANAGE_EVENTS}</h2>
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
                    ? isEditable(selectedRowId as string)
                    : status === BUTTON_ACTIONS.IS_ALL
                    ? false
                    : !isActive(selectedRowId as string),
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
          rows: !!events.length ? events : [],
          columns: COLUMNS,
          tableColumnExtensions: [],
          dateColumns: [
            TABLE_COLUMN_PROPERTIES.PUBLISHED,
            TABLE_COLUMN_PROPERTIES.MODIFIED,
          ],
          checkboxSelection: !!isAll,
          isGrouping: false,
          isLoading,
          showSelectionColumn: true,
          onRowSelected: (selectedRowId: string[]) =>
            !isAll
              ? setSelectedRowId(selectedRowId[0] as string)
              : setSelectedRowsId(selectedRowId as string[]),
          initSelection: selectedRowsId,
        }}
      />
    </section>
  );
};

export default ManageEvents;
