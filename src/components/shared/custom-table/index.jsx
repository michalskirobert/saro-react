import React, { useEffect, useState } from "react";
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
  Table,
  TableFilterRow,
  TableHeaderRow,
  TableSelection,
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
  onChangePage,
}) => {
  const [savedSelection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageSizes] = useState([5, 25, 50]);

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

  useEffect(() => {
    if (onChangePage) {
      onChangePage(currentPage + 1, pageSize);
    }
  }, [currentPage, pageSize]);

  return (
    <S.TableCard>
      <Grid {...{ columns, rows, getRowId }}>
        <FilteringState />
        <SortingState />
        <PagingState
          {...{
            currentPage,
            onCurrentPageChange: setCurrentPage,
            pageSize,
            onPageSizeChange: setPageSize,
          }}
        />
        <SelectionState
          {...{ selection: savedSelection, onSelectionChange: changeSelection }}
        />
        {isGrouping && (
          <GroupingState defaultGrouping={[{ columnName: columns[0].name }]} />
        )}

        <IntegratedSorting />
        <IntegratedPaging />

        <IntegratedFiltering />
        {dateColumns?.length && <DateTypeProvider for={dateColumns} />}

        <Table
          columnExtensions={tableColumnExtensions}
          rowComponent={({ ...restProps }) => (
            <S.TableRow
              {...{
                restProps,
              }}
            />
          )}
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
        <SelectionState />
        <TableHeaderRow />
        <TableFilterRow showFilterSelector />
        <PagingPanel {...{ pageSizes }} />
      </Grid>
    </S.TableCard>
  );
};
