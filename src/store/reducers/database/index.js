import * as CONSTANTS from "../../../utils/constants";

const defaultState = {
  isLoading: true,
  isError: false,
  ErrorContent: "",
  posts: [],
  events: [],
  news: [],
  nav: [],
  hero: [],
};

export const database = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.BLOG_CONSTANTS.GET_POSTS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.BLOG_CONSTANTS.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case CONSTANTS.EVENTS_CONSTANTS.GET_EVENTS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.EVENTS_CONSTANTS.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    case CONSTANTS.NEWS_CONSTANTS.GET_NEWS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.NEWS_CONSTANTS.GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
      };
    case CONSTANTS.NEWS_CONSTANTS.NEWS_VIEW_MORE:
      return {
        ...state,
        viewMore: !state.viewMore,
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
    default:
      return state;
  }
};
