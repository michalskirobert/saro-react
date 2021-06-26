import * as CONSTANTS from "@utils/constants";

const defaultState = {
  steps: 0,
};

export const stateStepsControlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.STATE_STEPS_CONTROL.UPDATE_STEPS:
      return {
        steps: action.payload,
      };
    default:
      return state;
  }
};
