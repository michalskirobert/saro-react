import { Dispatch } from "redux";

import * as C from "@utils/constants";

const getNewsRequest = () => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_NEWS_REQUEST });

const getNewsSuccess = (payload) => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_NEWS_SUCCESS, payload }); //trzeba otypować payloady w akcjach

const getNewsFailure = () => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_NEWS_SUCCESS });

const getEventsRequest = () => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_EVENTS_REQUEST });

const getEventsSuccess = (events) => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_EVENTS_SUCCESS, payload: events });

const getEventsFailure = () => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_EVENTS_FAILURE });

const getArticlesRequest = () => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_ARTICLES_REQUEST });

const getArticlesSuccess = (articles) => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_ARTICLES_SUCCESS, payload: articles });

const getArticlesFailure = () => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_ARTICLES_FAILURE });

const getCrewRequest = () => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_CREW_REQUEST });

const getCrewSuccess = (payload) => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_CREW_SUCCESS, payload });

const getCrewFailure = () => (dispatch: Dispatch) =>
  dispatch({ type: C.FETCH_CONSTANTS.GET_CREW_FAILURE });

const getDatabaseRequest = () => (dispatch: Dispatch) =>
  dispatch({
    type: C.FETCH_CONSTANTS.GET_DATABASE_REQUEST,
  });

const getDatabaseSucces = (payload) => (dispatch: Dispatch) =>
  dispatch({
    type: C.FETCH_CONSTANTS.GET_DATABASE_SUCCESS,
    payload,
  });

const getDatabaseFailure = () => (dispatch: Dispatch) =>
  dispatch({
    type: C.FETCH_CONSTANTS.GET_DATABASE_FAILURE,
  });

const getDictionaryRequest = () => (dispatch: Dispatch) =>
  dispatch({
    type: C.FETCH_CONSTANTS.GET_DICTIONARY_REQUEST,
  });

const getDictionarySucces = (payload) => (dispatch: Dispatch) =>
  dispatch({
    type: C.FETCH_CONSTANTS.GET_DICTIONARY_SUCCESS,
    payload,
  });

const getDictionaryFailure = () => (dispatch: Dispatch) =>
  dispatch({
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
