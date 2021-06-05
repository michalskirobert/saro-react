import { STATE_STEPS_CONTROL } from "@utils/constants";
import { Dispatch } from "redux";

const loginFirstStep = (data) => (dispatch: Dispatch) =>
  dispatch({
    type: STATE_STEPS_CONTROL.NEXT_STEP,
    payload: data,
  });

const loginSecondStep = (data) => (dispatch: Dispatch) =>
  dispatch({
    type: STATE_STEPS_CONTROL.PREVIOUS_STEP,
    payload: data,
  });

const updateSteps = (payload) => (dispatch: Dispatch) =>
  dispatch({
    type: STATE_STEPS_CONTROL.UPDATE_STEPS,
    payload,
  });

export const stateStepsControl = {
  loginFirstStep,
  loginSecondStep,
  updateSteps,
};
