import { CMS_CONSTANTS, UPLOAD_CONSTANTS } from "@utils/constants";

const addNewItemRequest = () => ({ type: CMS_CONSTANTS.ADD_NEW_ITEM_REQUEST });
const addNewItemSuccess = () => ({ type: CMS_CONSTANTS.ADD_NEW_ITEM_SUCCESS });
const addNewItemFailure = () => ({ type: CMS_CONSTANTS.ADD_NEW_ITEM_FAILURE });

const updateSuccess = () => {
  return {
    type: CMS_CONSTANTS.UPDATE_SUCESS,
  };
};
const updateRequest = () => {
  return {
    type: CMS_CONSTANTS.UPDATE_REQUEST,
  };
};
const updateFailure = () => {
  return {
    type: CMS_CONSTANTS.UPDATE_FAILURE,
  };
};
const uploadImageRequest = () => {
  return {
    type: UPLOAD_CONSTANTS.UPLOAD_IMAGE_REQUEST,
  };
};
const uploadImageSuccess = () => {
  return {
    type: UPLOAD_CONSTANTS.UPLOAD_IMAGE_SUCCESS,
  };
};
const uploadImageFailure = () => {
  return {
    type: UPLOAD_CONSTANTS.UPLOAD_IMAGE_FAILURE,
  };
};

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
