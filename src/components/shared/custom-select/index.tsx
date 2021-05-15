import React from "react";
import Select from "react-select";

import { NCustomItems } from "@namespace";

export const CustomSelect = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  isDisabled,
  invalid,
  options,
}: Partial<NCustomItems.TCustomSelect>): JSX.Element => {
  return (
    <Select
      {...{
        className: `saro-custom-select ${invalid && "invalid"}`,
        id: name,
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
  );
};
