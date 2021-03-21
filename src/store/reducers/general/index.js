import * as CONSTANTS from "../../../utils/constants";

const defaultState = {
  language: "en",
};

export const generalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.ENGLISH:
      return {
        ...state,
        language: "en",
      };
    case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.JAPANESE:
      return {
        ...state,
        language: "ja",
      };
    default:
      return state;
  }
};
