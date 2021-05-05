import React from "react";

import BlockUi from "react-block-ui";

import * as S from "./styles";

export const CustomLoadingBlocker = ({ children, isLoading }) => (
  <BlockUi
    {...{
      tag: "div",
      blocking: isLoading,
      loader: <S.CustomLoader type={"ball-pulse-sync"} active={true} />,
    }}
  >
    {children}
  </BlockUi>
);
