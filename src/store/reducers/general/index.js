import * as CONSTANTS from "@utils/constants";

const defaultState = {
  language: "en",
};

export const generalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.EN:
      return {
        ...state,
        language: "en",
      };
    case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.JA:
      return {
        ...state,
        language: "ja",
      };
    case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.KO:
      return {
        ...state,
        language: "ko",
      };
    case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.ZH:
      return {
        ...state,
        language: "zh",
      };
      case CONSTANTS.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.VI:
        return {
          ...state,
          language: "vi",
        };
    default:
      return state;
  }
};
