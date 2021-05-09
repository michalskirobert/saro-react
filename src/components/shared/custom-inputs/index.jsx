import React from "react";
import {Form} from "react-bootstrap"

export const CustomInput = ({
invalid,
id,
placeholder,
type,
value,
onChange,
label
}) => {
  return (
    <>
    {label && <Form.Label for={id}>{label}</Form.Label>}
    <input
      {...{
        className: `saro-custom-input ${invalid && "invalid"}`,
        id,   
        placeholder,
        value,
        onChange,
        type
      }}
    />
</>
  );
};