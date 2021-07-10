import React, { useEffect, useState } from "react";

import { CustomTableCell } from "./custom-table-cell";
import { CustomLoadingBlocker } from "@components/shared/custom-loadings/LoadingBlocker";

import {
  CustomPaging,
  CustomTreeData,
  FilteringState,
  GroupingState,
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSelection,
  IntegratedSorting,
  PagingState,
  SelectionState,
  SortingState,
  TreeDataState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  PagingPanel,
  Table,
  TableColumnResizing,
  TableFilterRow,
  TableHeaderRow,
  TableSelection,
  TableTreeColumn,
  VirtualTable,
} from "@devexpress/dx-react-grid-bootstrap4";

import { getRowId } from "./utils";
import { DateTypeProvider } from "./container";

import * as CONSTANTS from "@utils/constants";

import * as S from "./styles";
import { NDefaultReactTypes } from "@namespace/react-types";

export const CustomDataTable = ({
  rows,
  totalCount,
  columns,
  isGrouping,
  tableColumnExtensions,
  dateColumns,
  checkboxSelection = false,
  showSelectAll = false,
  checkboxOneSelection = false,
  onRowSelected,
  initSelection,
  isLoading = false,
  isFixTable = false,
  isTableTreeView = false,
  showSelectionControls = false,
  onChangePage,
}: any): JSX.Element => {
  const [savedSelection, setSelection] = useState<NDefaultReactTypes.TText[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [pageSizes] = useState([10, 20, 50]);

  const resizedColumns = columns.map(({ name }) => ({
    columnName: name,
    width: "80%",
  }));

  const getChildRows = (row: any, rootRows: any): any => {
    return row ? row.items : rootRows;
  };

  const changeSelection = (selection: NDefaultReactTypes.TText[]): void => {
    if ((!checkboxOneSelection && checkboxSelection) || showSelectAll) {
      setSelection(selection);
      onRowSelected(selection);
      return;
    }

    const lastSelected = selection.find(
      (selected) => savedSelection.indexOf(selected) === -1
    ) as number;

    if (
      lastSelected !== undefined ||
      (checkboxOneSelection && checkboxSelection)
    ) {
      setSelection([lastSelected]);
      onRowSelected([lastSelected]);
      return;
    }

    if (selection.length) {
      onRowSelected(selection as number[]);
    }
  };

  useEffect(() => {
    if (initSelection) {
      setSelection(initSelection);
      onRowSelected(initSelection);
    }
  }, [initSelection]);

  useEffect(() => {
    if (initSelection) {
      setSelection(initSelection);
      onRowSelected(initSelection);
    }
  }, [initSelection]);

  useEffect(() => {
    if (onChangePage) {
      onChangePage(currentPage + 1, pageSize);
    }
  }, [currentPage, pageSize]);
  return (
    <CustomLoadingBlocker {...{ isLoading }}>
      <S.TableCard>
        <Grid {...{ columns, rows, getRowId }}>
          <FilteringState />
          <SortingState
            {...{
              defaultSorting: [
                { columnName: "expireDateFrom", direction: "desc" },
              ],
            }}
          />
          <PagingState
            {...{
              currentPage,
              onCurrentPageChange: setCurrentPage,
              pageSize,
              onPageSizeChange: setPageSize,
            }}
          />
          <SelectionState
            {...{
              selection: savedSelection,
              onSelectionChange: changeSelection,
            }}
          />
          {isGrouping && (
            <GroupingState
              defaultGrouping={[{ columnName: columns[0].name }]}
            />
          )}
          <IntegratedSorting />
          <IntegratedPaging />
          <IntegratedFiltering />
          {dateColumns?.length && <DateTypeProvider for={dateColumns} />}
          {!!onChangePage && <CustomPaging {...{ totalCount }} />}

          {isTableTreeView && <TreeDataState />}
          {isTableTreeView && <CustomTreeData {...{ getChildRows }} />}

          {isFixTable ? (
            <VirtualTable
              {...{
                columnExtensions: tableColumnExtensions,
                rowComponent: ({ ...restProps }) => CustomTableCell(restProps),
                messages: {
                  noData: CONSTANTS.GENERAL_CONSTANTS.NO_DATA_MESSAGE,
                },
              }}
            />
          ) : (
            <Table
              {...{
                columnExtensions: tableColumnExtensions,
                rowComponent: ({ ...restProps }) => CustomTableCell(restProps),
                messages: {
                  noData: CONSTANTS.GENERAL_CONSTANTS.NO_DATA_MESSAGE,
                },
              }}
            />
          )}
          <TableColumnResizing
            {...{
              defaultColumnWidths: resizedColumns,
              resizingMode: "nextColumn",
            }}
          />
          <IntegratedSelection />
          <TableSelection
            {...{
              showSelectionColumn: checkboxSelection,
              selectByRowClick: true,
              highlightRow: true,
              showSelectAll,
            }}
          />
          <TableHeaderRow showSortingControls />
          {isTableTreeView && (
            <TableTreeColumn {...{ showSelectionControls, for: "category" }} />
          )}
          <TableFilterRow {...{ showFilterSelector: true }} />
          <PagingPanel {...{ pageSizes }} />
        </Grid>
      </S.TableCard>
    </CustomLoadingBlocker>
  );
};
