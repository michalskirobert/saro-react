import { CMS_CONSTANTS } from "../../utils/constants";

const addNewsReq = () => {
  return {
    type: CMS_CONSTANTS.ADD_NEWS_REQUEST,
  };
};

const addNewsSuccess = () => {
  return {
    type: CMS_CONSTANTS.ADD_NEWS_SUCCESS,
  };
};

const addNewsFailure = () => {
  return {
    type: CMS_CONSTANTS.ADD_NEWS_FAILURE,
  };
};

const clear = () => {
  return {
    type: CMS_CONSTANTS.CLEAR,
  };
};

const addEventsSuccess = () => {
  return {
    type: CMS_CONSTANTS.ADD_EVENT_SUCCESS,
  };
};

const addEventsReq = () => {
  return {
    type: CMS_CONSTANTS.ADD_EVENT_REQUEST,
  };
};

const addEventsFailure = () => {
  return {
    type: CMS_CONSTANTS.ADD_EVENT_FAILURE,
  };
};

const addArticleSuccess = () => {
  return {
    type: CMS_CONSTANTS.ADD_ARTICLE_SUCCESS,
  };
};

const addArticleReq = () => {
  return {
    type: CMS_CONSTANTS.ADD_ARTICLE_REQUEST,
  };
};

const addArticleFailure = () => {
  return {
    type: CMS_CONSTANTS.ADD_ARTICLE_FAILURE,
  };
};

const edit = (params) => {
  return {
    type: CMS_CONSTANTS.EDIT,
    payload: params,
  };
};

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

export const cmsActions = {
  updateSuccess,
  updateRequest,
  updateFailure,
  addNewsReq,
  addNewsSuccess,
  addNewsFailure,
  addEventsSuccess,
  addEventsReq,
  addEventsFailure,
  addArticleFailure,
  addArticleReq,
  addArticleSuccess,
  clear,
  edit,
};
