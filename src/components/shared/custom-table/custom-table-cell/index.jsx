import React, { ReactElement } from 'react';

import * as S from './styles';

export const CustomTableCell = ({ row, tableRow, children }) => {
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
