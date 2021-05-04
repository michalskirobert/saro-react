import React from "react";
import Select from "react-select";

export const CustomSelect = ({ label, value, placeholder, onChange }) => {
  return (
    <Select
      {...{
        className: "custom-select",
        id: value,
        name: value,
        styles: { menuPortal: (base) => ({ ...base, zIndex: 9999 }) },
        menuPortalTarget: document.body,
        menuPosition: "fixed",
        placeholder,
        value: { label, value },
        options: { label, value },
        onChange: (options) => onChange(options),
      }}
    />
  );
};
