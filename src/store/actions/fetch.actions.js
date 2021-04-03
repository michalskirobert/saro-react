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

export const fetchActions = {
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
};
