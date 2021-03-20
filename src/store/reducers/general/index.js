import * as CONSTANTS from "../../../utils/constants";

const defaultState = {
  language: "en",
};

export const generalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.generalConstants.CHANGE_LANGUAGE_TO.ENGLISH:
      return {
        ...state,
        language: "en",
      };
    default:
      return state;
  }
};
