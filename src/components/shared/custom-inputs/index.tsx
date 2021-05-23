import React from "react";
import {
  CustomInputProps,
  FormGroup,
  CustomInput as Input,
  Label,
} from "reactstrap";

export const CustomInput = ({
  invalid,
  id,
  placeholder,
  type,
  value,
  onChange,
  label,
}: CustomInputProps): JSX.Element => {
  return (
    <FormGroup>
      {label && <Label for={id as string}>{label}</Label>}
      <Input
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
