import { cmsConstants } from "../_constants";

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

const clear = () => {
  return {
    type: cmsConstants.CLEAR,
  };
};

const addEventsSuccess = () => {
  return {
    type: cmsConstants.ADD_EVENT_SUCCESS,
  };
};

const addEventsReq = () => {
  return {
    type: cmsConstants.ADD_EVENT_REQUEST,
  };
};

const addEventsFailure = () => {
  return {
    type: cmsConstants.ADD_EVENT_FAILURE,
  };
};

const addArticleSuccess = () => {
  return {
    type: cmsConstants.ADD_ARTICLE_SUCCESS,
  };
};

const addArticleReq = () => {
  return {
    type: cmsConstants.ADD_ARTICLE_REQUEST,
  };
};

const addArticleFailure = () => {
  return {
    type: cmsConstants.ADD_ARTICLE_FAILURE,
  };
};

const edit = (params) => {
  return {
    type: cmsConstants.EDIT,
    payload: params,
  };
};

export const cmsActions = {
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
