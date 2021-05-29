import React from "react";
import Select from "react-select";
import {FormGroup, Label} from "reactstrap";

import { NCustomItems } from "@namespace/index";

export const CustomSelect = ({
  name,
  label,
  labelText,
  value,
  id,
  placeholder,
  onChange,
  isDisabled,
  invalid,
  options,
}: NCustomItems.TCustomSelect): JSX.Element => {
  return (
    <FormGroup>
    {labelText && <Label for={id as string}>{labelText}</Label>}
    <Select
      {...{
        className: `saro-custom-select ${invalid && "invalid"}`,
        id,
        name,
        styles: { menuPortal: (base) => ({ ...base, zIndex: 9999 }) },
        menuPortalTarget: document.body,
        menuPosition: "fixed",
        placeholder,
        value: { label, value },
        options,
        onChange: (values: any) => onChange(name, values),
        isDisabled,
      }}
    />
    </FormGroup>
  );
};
