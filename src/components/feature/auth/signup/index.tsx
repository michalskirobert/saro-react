import React, { ReactElement, Suspense } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import { useStepsContainer } from "./steps-container/container";

import { DefaultLoader } from "@components/shared/custom-loadings";

export const CustomStepsComponent = (): ReactElement => {
  const currentStep = useSelector(
    (state: RootStateOrAny) => state?.stateStepsControl?.steps
  );

  const { STEPS } = useStepsContainer();

  return (
    <div>
      {currentStep !== undefined && (
        <Suspense fallback={<DefaultLoader />}>
          {STEPS[currentStep]?.component}
        </Suspense>
      )}
    </div>
  );
};

export default CustomStepsComponent;
