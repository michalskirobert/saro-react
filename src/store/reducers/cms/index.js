import * as CONSTANTS from "@utils/constants";

const defaultState = {
  isLoading: false,
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
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
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
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_EVENT_FAILURE:
      return {
        ...state,
        isLoading: false,
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
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case CONSTANTS.CMS_CONSTANTS.EDIT:
      return {
        ...state,
        edit: action.payload,
      };
    case CONSTANTS.CMS_CONSTANTS.UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case CONSTANTS.CMS_CONSTANTS.UPDATE_SUCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CONSTANTS.CMS_CONSTANTS.UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.UPLOAD_CONSTANTS.UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.UPLOAD_CONSTANTS.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CONSTANTS.UPLOAD_CONSTANTS.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
