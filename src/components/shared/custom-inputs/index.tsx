import React from "react";
import { Label } from "reactstrap";

import * as S from "./styles";
import { NCustomItems } from "src/core/types";

export const CustomInput = ({
  invalid,
  id,
  placeholder,
  type,
  value,
  onChange,
  label,
}: Partial<NCustomItems.TCustomInput>): JSX.Element => {
  return (
    <>
      {label && <Label for={id}>{label}</Label>}
      <S.Input
        {...{
          className: `saro-custom-input`,
          id,
          placeholder,
          value,
          onChange,
          type,
          invalid,
        }}
      />
    </>
  );
};
