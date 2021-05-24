import * as CONSTANTS from "@utils/constants";

const defaultState = {
  isLoading: false,
  edit: null,
};

export const cmsReducer = (state = defaultState, action): any => {
  switch (action.type) {
    case CONSTANTS.CMS_CONSTANTS.ADD_NEW_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_NEW_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CONSTANTS.CMS_CONSTANTS.ADD_NEW_ITEM_FAILURE:
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
