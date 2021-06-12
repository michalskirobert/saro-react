import React, { ReactElement, Suspense } from "react";

export const CustomStepsComponent = ({ STEPS, type }): ReactElement => {
  return (
    <div>
      <div className={"divider-upper"} />
      {currentStep !== undefined && (
        <Suspense fallback={<CustomLoader {...{ type }} />}>
          {STEPS[currentStep]?.component}
        </Suspense>
      )}
    </div>
  );
};
