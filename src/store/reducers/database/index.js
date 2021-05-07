import * as CONSTANTS from "@utils/constants";

const initialState = {
  isLoading: true,
  isError: false,
  ErrorContent: "",
  articles: [],
  events: [],
  news: [],
  hero: [],
  crew: [],
  dictionary: [],
  init: { nav: [], pages: [], auth: [] },
};

export const database = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_CONSTANTS.GET_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        isLoading: false,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_ARTICLES_FAILURE:
      return {
        ...state,
        articles: [],
        isLoading: false,
        isError: true,
        errorContent: "Oops.. Something went wrong, refresh your browser",
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_EVENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_EVENTS_FAILURE:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
        isError: true,
        errorContent: "Oops.. Something went wrong, refresh your browser",
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_NEWS_FAILURE:
      return {
        ...state,
        news: [],
        isLoading: false,
        isError: true,
        errorContent: "Oops.. Something went wrong, refresh your browser",
      };
    case CONSTANTS.HERO_CONSTANTS.GET_HERO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.HERO_CONSTANTS.GET_HERO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hero: action.payload,
      };
    case CONSTANTS.HERO_CONSTANTS.GET_HERO_FAILURE:
      return {
        ...state,
        isLoading: false,
        hero: [],
        isError: true,
        errorContent: "Failed to fetch hero",
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_CREW_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_CREW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        crew: action.payload,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_CREW_FAILURE:
      return {
        ...state,
        isLoading: false,
        crew: [],
        isError: true,
        errorContent: "Ooops, we couldn't load our crew :/",
      };

    case CONSTANTS.FETCH_CONSTANTS.GET_DATABASE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_DATABASE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        init: action.payload,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_DATABASE_FAILURE:
      return {
        ...state,
        isLoading: false,
        init: {},
        isError: true,
        errorContent: action.payload,
      };

    case CONSTANTS.FETCH_CONSTANTS.GET_DICTIONARY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_DICTIONARY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dictionary: action.payload,
      };
    case CONSTANTS.FETCH_CONSTANTS.GET_DICTIONARY_FAILURE:
      return {
        ...state,
        isLoading: false,
        dictionary: [],
        isError: true,
        errorContent: action.payload,
      };
    default:
      return state;
  }
};
