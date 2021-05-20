import React from "react";

import BlockUi from "react-block-ui";

import { Spinner } from "reactstrap";

export const CustomLoadingBlocker = ({ children, isLoading }):  JSX.Element => (
  <BlockUi
    {...{
      tag: "div",
      blocking: isLoading,
      loader: <Spinner animation={"border"} role={"status"}></Spinner>,
    }}
  >
    {children}
  </BlockUi>
);
