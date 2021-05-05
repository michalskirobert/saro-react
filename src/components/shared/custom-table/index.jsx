import React, { useEffect, useState } from "react";

import { CustomTableCell } from "./custom-table-cell";
import { LoadingBlocker } from "@components/shared/loadings/LoadingBlocker";

import {
  FilteringState,
  GroupingState,
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSelection,
  IntegratedSorting,
  PagingState,
  SelectionState,
  SortingState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  PagingPanel,
  TableFilterRow,
  TableHeaderRow,
  TableSelection,
  VirtualTable,
  TableColumnResizing,
} from "@devexpress/dx-react-grid-bootstrap4";

import { getRowId } from "./utils";
import { DateTypeProvider } from "./container";

import * as S from "./styles";

export const CustomDataTable = ({
  rows,
  columns,
  isGrouping,
  tableColumnExtensions,
  dateColumns,
  checkboxSelection = false,
  showSelectAll = false,
  onRowSelected,
  initSelection,
  isLoading = false,
}) => {
  const [savedSelection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageSizes] = useState([5, 25, 50]);

  const resizedColumns = columns.map(({ name }) => ({
    columnName: name,
    width: "80%",
  }));

  const changeSelection = (selection) => {
    if (checkboxSelection || showSelectAll) {
      setSelection(selection);
      onRowSelected(selection);
      return;
    }
    const lastSelected = selection.find(
      (selected) => savedSelection.indexOf(selected) === -1
    );

    if (lastSelected !== undefined) {
      setSelection([lastSelected]);
      onRowSelected([lastSelected]);
      return;
    }
    if (selection.length) {
      onRowSelected(selection);
    }
  };

  useEffect(() => {
    if (initSelection) {
      setSelection(initSelection);
      onRowSelected(initSelection);
    }
  }, [initSelection]);

  return (
    <LoadingBlocker {...{ isLoading }}>
      <S.TableCard>
        <Grid {...{ columns, rows, getRowId }}>
          <FilteringState />
          <SortingState
            {...{
              defaultSorting: [
                {
                  columnName: "publishedDate",
                  direction: "dsc",
                },
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

          <VirtualTable
            {...{
              columnExtensions: tableColumnExtensions,
              rowComponent: ({ ...restProps }) => CustomTableCell(...restProps),
              messages: {
                noData: "Nothing to display",
              },
            }}
          />

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
          <TableFilterRow showFilterSelector />
          <PagingPanel {...{ pageSizes }} />
        </Grid>
      </S.TableCard>
    </LoadingBlocker>
  );
};
