import React from "react";

import * as S from "../styles";

export const CustomTableCell = ({ tableRow, children, row }) => {
  return (
    <S.TableRow
      {...{
        tableRow,
        children,
        row,
      }}
    />
  );
};
