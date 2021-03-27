import * as CONSTANTS from "../../../utils/constants";

const defaultState = {
  isLoading: false,
  alert: false,
  alertMsg: "",
  alertType: "",
  edit: null,
};

export const cmsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.CMS_CONSTANTS.ADD_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "Post has been published",
        alertType: CONSTANTS.ALERT_CONSTANTS.STATUS_SUCCESS,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "We had a problem... Please try again...",
        alertType: CONSTANTS.ALERT_CONSTANTS.STATUS_ERROR,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "Event has been published",
        alertType: CONSTANTS.ALERT_CONSTANTS.STATUS_SUCCESS,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_EVENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "We had a problem... Please try again...",
        alertType: CONSTANTS.ALERT_CONSTANTS.STATUS_ERROR,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "Article has been published",
        alertType: CONSTANTS.ALERT_CONSTANTS.STATUS_SUCCESS,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "We had a problem... Please try again...",
        alertType: CONSTANTS.ALERT_CONSTANTS.STATUS_ERROR,
      };
    case CONSTANTS.CMS_CONSTANTS.EDIT:
      return {
        ...state,
        edit: action.payload,
      };
    case CONSTANTS.CMS_CONSTANTS.CLEAR:
      return {
        ...state,
        alert: false,
        alertMsg: "",
        alertType: "",
      };
    default:
      return state;
  }
};
