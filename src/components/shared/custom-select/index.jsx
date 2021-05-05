import React from "react";
import Select from "react-select";

export const CustomSelect = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  isDisabled,
  invalid,
  options,
}) => {
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
        // value: { label, value },
        options: options,
        onChange: onChange,
      }}
    />
  );
};
