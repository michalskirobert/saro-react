import { lazy } from "react";

import { stepsTitle } from "./utils";

const FirstStep = lazy(() => import("../sign-up-basic/SignUpBasic"));
const SecondStep = lazy(
  () => import("../update-user-informations/SignUpUpdate")
);

export const useStepsContainer = (): any => {
  const STEPS = [
    {
      name: stepsTitle.STEP_BASIC,
      component: FirstStep,
    },
    {
      name: stepsTitle.STEP_UPDATE_USER_INFORMATIONS,
      component: SecondStep,
    },
  ];

  return { STEPS };
};
