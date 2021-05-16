import { STATE_STEPS_CONTROL } from "@utils/constants";

const loginFirstStep = (data) => ({
  type: STATE_STEPS_CONTROL.FIRST_STEP,
  payload: data,
});

const loginSecondStep = (data) => ({
  type: STATE_STEPS_CONTROL.SECOND_STEP,
  payload: data,
});

export const stateStepsControl = {
  loginFirstStep,
  loginSecondStep,
};
