import React from "react";
import Select, { ValueType } from "react-select";
import { FormGroup, Label } from "reactstrap";

import { NCustomItems } from "@namespace/index";

export const CustomSelect = ({
  name,
  labelText,
  value,
  placeholder,
  onChange,
  isDisabled,
  invalid,
  options,
}: NCustomItems.TCustomSelect): JSX.Element => {
  return (
    <FormGroup>
      {labelText && <Label for={name as string}>{labelText}</Label>}
      <Select
        {...{
          className: `saro-custom-select ${invalid && "invalid"}`,
          id: name,
          name,
          styles: { menuPortal: (base) => ({ ...base, zIndex: 9999 }) },
          menuPortalTarget: document.body,
          menuPosition: "fixed",
          placeholder,
          value,
          options,
          onChange: (
            values: ValueType<
              { label: string | undefined; value: string | undefined },
              false
            >
          ) => onChange(name, values),
          isDisabled,
        }}
      />
    </FormGroup>
  );
};
