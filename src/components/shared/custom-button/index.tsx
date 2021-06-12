import React from "react";
import { NCustomItems } from "src/core/types";
import * as S from "./styles";

export const CustomButton = ({
  className,
  disabled,
  type,
  content,
  onClick,
  variant,
}: NCustomItems.TCustomButton): JSX.Element => {
  return (
    <S.CustomButton
      {...{
        className,
        type,
        disabled,
        onClick,
        variant,
      }}
    >
      {content}
    </S.CustomButton>
  );
};
