import React from "react";
import * as S from "./styles";

const CustomButton = ({ name, style, type, isOutline, outlineType }) => {
  return (
    <S.CustomButton
      {...{
        variant: `${style && style} ${
          isOutline && `${isOutline}-${outlineType}`
        }`,
        type,
      }}
    >
      {name}
    </S.CustomButton>
  );
};

export default CustomButton;
