import * as C from "@utils/constants";

const getNewsRequest = () => {
  return {
    type: C.FETCH_CONSTANTS.GET_NEWS_REQUEST,
  };
};

const getNewsSuccess = (payload) => {
  return {
    type: C.FETCH_CONSTANTS.GET_NEWS_SUCCESS,
    payload,
  };
};

const getNewsFailure = () => {
  return {
    type: C.FETCH_CONSTANTS.GET_NEWS_SUCCESS,
  };
};

const getEventsRequest = () => {
  return {
    type: C.FETCH_CONSTANTS.GET_EVENTS_REQUEST,
  };
};

const getEventsSuccess = (events) => {
  return {
    type: C.FETCH_CONSTANTS.GET_EVENTS_SUCCESS,
    payload: events,
  };
};

const getEventsFailure = () => {
  return {
    type: C.FETCH_CONSTANTS.GET_EVENTS_FAILURE,
  };
};

const getArticlesRequest = () => {
  return {
    type: C.FETCH_CONSTANTS.GET_ARTICLES_REQUEST,
  };
};

const getArticlesSuccess = (articles) => {
  return {
    type: C.FETCH_CONSTANTS.GET_ARTICLES_SUCCESS,
    payload: articles,
  };
};

const getArticlesFailure = () => {
  return {
    type: C.FETCH_CONSTANTS.GET_ARTICLES_FAILURE,
  };
};

const getCrewRequest = () => ({ type: C.FETCH_CONSTANTS.GET_CREW_REQUEST });

const getCrewSuccess = (payload) => ({
  type: C.FETCH_CONSTANTS.GET_CREW_SUCCESS,
  payload,
});

const getCrewFailure = () => ({ type: C.FETCH_CONSTANTS.GET_CREW_FAILURE });

const getDatabaseRequest = () => ({
  type: C.FETCH_CONSTANTS.GET_DATABASE_REQUEST,
});

const getDatabaseSucces = (payload) => ({
  type: C.FETCH_CONSTANTS.GET_DATABASE_SUCCESS,
  payload,
});

const getDatabaseFailure = () => ({
  type: C.FETCH_CONSTANTS.GET_DATABASE_FAILURE,
});

const getDictionaryRequest = () => ({
  type: C.FETCH_CONSTANTS.GET_DICTIONARY_REQUEST,
});

const getDictionarySucces = (payload) => ({
  type: C.FETCH_CONSTANTS.GET_DICTIONARY_SUCCESS,
  payload,
});

const getDictionaryFailure = () => ({
  type: C.FETCH_CONSTANTS.GET_DICTIONARY_FAILURE,
});

export const fetchActions = {
  getNewsSuccess,
  getNewsRequest,
  getNewsFailure,
  getEventsRequest,
  getEventsSuccess,
  getEventsFailure,
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesFailure,
  getCrewRequest,
  getCrewSuccess,
  getCrewFailure,
  getDatabaseRequest,
  getDatabaseSucces,
  getDatabaseFailure,
  getDictionaryRequest,
  getDictionarySucces,
  getDictionaryFailure,
};
