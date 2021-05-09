import React from "react";
import { Form } from "react-bootstrap";

import * as S from "./styles";

export const CustomInput = ({
  invalid,
  id,
  placeholder,
  type,
  value,
  onChange,
  label,
}) => {
  return (
    <>
      {label && <Form.Label for={id}>{label}</Form.Label>}
      <S.CustomInput
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
