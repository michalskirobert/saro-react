import { CMS_CONSTANTS } from "../../../utils/constants";

const defaultState = {
  isLoading: false,
  alert: false,
  alertMsg: "",
  alertType: "",
  edit: null,
};

export const cmsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CMS_CONSTANTS.ADD_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CMS_CONSTANTS.ADD_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "Post has been published",
        alertType: "success",
      };
    case CMS_CONSTANTS.ADD_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "We had a problem... Please try again...",
        alertType: "danger",
      };
    case CMS_CONSTANTS.ADD_EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CMS_CONSTANTS.ADD_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "Event has been published",
        alertType: "success",
      };
    case CMS_CONSTANTS.ADD_EVENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "We had a problem... Please try again...",
        alertType: "danger",
      };
    case CMS_CONSTANTS.ADD_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CMS_CONSTANTS.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "Article has been published",
        alertType: "success",
      };
    case CMS_CONSTANTS.ADD_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        alert: true,
        alertMsg: "We had a problem... Please try again...",
        alertType: "danger",
      };
    case CMS_CONSTANTS.EDIT:
      return {
        ...state,
        edit: action.payload,
      };
    case CMS_CONSTANTS.CLEAR:
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
