import * as CONSTANTS from "@utils/constants";

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
      case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.KOREAN:
      return {
        ...state,
        language: "ko",
      };
      case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.CHINESE:
      return {
        ...state,
        language: "zh",
      };
    default:
      return state;
  }
};
