import React, { ReactElement } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import { useStepsContainer } from "./steps-container/container";

export const CustomStepsComponent = (): ReactElement => {
  const currentStep = useSelector(
    (state: RootStateOrAny) => state?.stateStepsControl?.steps
  );

  const { STEPS } = useStepsContainer();

  return (
    <div>
      <div className={"divider-upper"} />
      {/* {currentStep !== undefined && (
        <Suspense fallback={<CustomLoader {...{ type }} />}>
          {STEPS[currentStep]?.component}
        </Suspense>
      )} */}
      {currentStep !== undefined && STEPS[currentStep]?.component}
    </div>
  );
};

export default CustomStepsComponent;
