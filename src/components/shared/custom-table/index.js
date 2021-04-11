import React from "react";
import { Button, Pagination } from "react-bootstrap";

import { CustomTableCell } from "./custom-table-cell";

export const CustomTable = ({
  row,
  totalCount,
  checkboxSelect,
  allCheckBoxSelect,
  selectedRowId,
  onChangePage,
}) => {
  //todo pagination

  return <CustomTableCell {...{ row }} />;
};
