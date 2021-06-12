import { CMS_CONSTANTS, UPLOAD_CONSTANTS } from "@utils/constants";
import { Dispatch } from "redux";

const addNewItemRequest = () => ({ type: CMS_CONSTANTS.ADD_NEW_ITEM_REQUEST });
const addNewItemSuccess = () => ({ type: CMS_CONSTANTS.ADD_NEW_ITEM_SUCCESS });
const addNewItemFailure = () => ({ type: CMS_CONSTANTS.ADD_NEW_ITEM_FAILURE });

const updateSuccess = () => (dispatch: Dispatch) =>
  dispatch({ type: CMS_CONSTANTS.UPDATE_SUCESS });
const updateRequest = () => (dispatch: Dispatch) =>
  dispatch({ type: CMS_CONSTANTS.UPDATE_REQUEST });
const updateFailure = () => (dispatch: Dispatch) =>
  dispatch({ type: CMS_CONSTANTS.UPDATE_FAILURE });
const uploadImageRequest = () => (dispatch: Dispatch) =>
  dispatch({ type: UPLOAD_CONSTANTS.UPLOAD_IMAGE_REQUEST });
const uploadImageSuccess = () => (dispatch: Dispatch) =>
  dispatch({ type: UPLOAD_CONSTANTS.UPLOAD_IMAGE_SUCCESS });
const uploadImageFailure = () => (dispatch: Dispatch) =>
  dispatch({ type: UPLOAD_CONSTANTS.UPLOAD_IMAGE_FAILURE });

export const cmsActions = {
  uploadImageRequest,
  uploadImageSuccess,
  uploadImageFailure,
  updateSuccess,
  updateRequest,
  updateFailure,
  addNewItemRequest,
  addNewItemSuccess,
  addNewItemFailure,
};
