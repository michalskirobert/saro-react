import { NCustomItems } from "@namespace/shared";
import React from "react";
import {
  FormGroup,
  Label,
} from "reactstrap";
import * as S from "./styles";

export const CustomInput = ({
  invalid,
  id,
  placeholder,
  type,
  value,
  onChange,
  label,
}: NCustomItems.TCustomInput): JSX.Element => {
  return (
    <FormGroup>
      {label && <Label for={id as string}>{label}</Label>}
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
    </FormGroup>
  );
};
