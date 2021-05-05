import React from "react";

import BlockUi from "react-block-ui";

import { Spinner } from "react-bootstrap";

export const CustomLoadingBlocker = ({ children, isLoading }) => (
  <BlockUi
    {...{
      tag: "div",
      blocking: isLoading,
      loader: <Spinner animation="border" role="status"></Spinner>,
    }}
  >
    {children}
  </BlockUi>
);
