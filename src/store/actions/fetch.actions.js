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
    type: C.FETCH_CONSTANTS.GET_EVENTS_SUCCESS,
  };
};

const getPostsRequest = () => {
  return {
    type: C.FETCH_CONSTANTS.GET_POSTS_REQUEST,
  };
};

const getPostsSuccess = (posts) => {
  return {
    type: C.FETCH_CONSTANTS.GET_POSTS_SUCCESS,
    payload: posts,
  };
};

const getCrewRequest = () => ({ type: C.FETCH_CONSTANTS.GET_CREW_REQUEST });

const getCrewSuccess = (payload) => ({
  type: C.FETCH_CONSTANTS.GET_CREW_SUCCESS,
  payload,
});

const getCrewFailure = () => ({ type: C.FETCH_CONSTANTS.GET_CREW_FAILURE });

const getCategoryRequest = () => ({ type: C.FETCH_CONSTANTS.GET_CREW_REQUEST });

const geCategorySuccess = (payload) => ({
  type: C.FETCH_CONSTANTS.GET_CREW_SUCCESS,
  payload,
});

const getCategoryFailure = () => ({ type: C.FETCH_CONSTANTS.GET_CREW_FAILURE });


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

const getNavRequest = () => ({ type: C.FETCH_CONSTANTS.GET_NAV_REQUEST });

const getNavSuccess = (payload) => ({
  type: C.FETCH_CONSTANTS.GET_NAV_SUCCESS,
  payload,
});

const getNavFailure = () => ({ type: C.FETCH_CONSTANTS.GET_NAV_FAILURE });

export const fetchActions = {
  getNavRequest,
  getNavSuccess,
  getNavFailure,
  getCategoryRequest,
  geCategorySuccess,
  getCategoryFailure,
  getNewsSuccess,
  getNewsRequest,
  getNewsFailure,
  getEventsRequest,
  getEventsSuccess,
  getEventsFailure,
  getPostsRequest,
  getPostsSuccess,
  getCrewRequest,
  getCrewSuccess,
  getCrewFailure,
  getDatabaseRequest,
  getDatabaseSucces,
  getDatabaseFailure,
};
