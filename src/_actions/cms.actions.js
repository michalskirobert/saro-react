import { cmsConstants } from "./../_constants";

const addNewsReq = () => {
  return {
    type: cmsConstants.ADD_NEWS_REQUEST,
  };
};

const addNewsSuccess = () => {
  return {
    type: cmsConstants.ADD_NEWS_SUCCESS,
  };
};

const addNewsFailure = () => {
  return {
    type: cmsConstants.ADD_NEWS_FAILURE,
  };
};

export const cmsActions = {
  addNewsReq,
  addNewsSuccess,
  addNewsFailure,
};
