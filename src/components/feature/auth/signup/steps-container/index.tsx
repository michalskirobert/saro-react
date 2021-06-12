import React, { ReactElement } from "react";

import { useStepsContainer } from "./container";
import { CustomStepButton } from "@components/shared/custom-step-button";

export const StepsContainer = (): ReactElement => {
  const { STEPS } = useStepsContainer();

  return (
    <CustomStepButton
      {...{
        STEPS,
      }}
    />
  );
};

export { StepsContainer as default };
