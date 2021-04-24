import * as CONSTANTS from "@utils/constants";

const defaultState = {
  stateStepsControl: {},
};

export const stateStepsControlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.STATE_STEPS_CONTROL.FIRST_STEP:
      return {
        stateStepsControl: {
          ...state,
          "step-1": action.playload,
        },
      };
    case CONSTANTS.STATE_STEPS_CONTROL.SECOND_STEP:
      return {
        stateStepsControl: {
          ...state,
          "step-2": action.playload,
        },
      };
    default:
      return state;
  }
};
