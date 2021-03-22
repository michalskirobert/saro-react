import * as CONSTANTS from "../../../utils/constants";

const defaultState = {
  isLoading: true,
  isError: false,
  ErrorContent: "",
  posts: [],
  events: [],
  news: [],
  nav: [],
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
        posts: action.payload,
        isLoading: false,
      };
    case CONSTANTS.NEWS_CONSTANTS.NEWS_VIEW_MORE:
      return {
        ...state,
        viewMore: !state.viewMore,
      };
    default:
      return state;
  }
};
