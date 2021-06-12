import React from "react";
import { lazy } from "react";

import { stepsTitle } from "./utils";

const SignUpBasic = lazy(() => import("../sign-up-basic/SignUpBasic"));
const SignUpUpdate = lazy(
  () => import("../update-user-informations/SignUpUpdate")
);

export const useStepsContainer = (): {
  STEPS: {
    name: string;
    component: JSX.Element;
  }[];
} => {
  const STEPS = [
    {
      name: stepsTitle.STEP_BASIC,
      component: <SignUpBasic />,
    },
    {
      name: stepsTitle.STEP_UPDATE_USER_INFORMATIONS,
      component: <SignUpUpdate />,
    },
  ];

  return { STEPS };
};
