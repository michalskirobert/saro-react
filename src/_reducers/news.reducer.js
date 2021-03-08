import { newsConstants } from "./../_constants";

const initialState = {
  posts: [],
  isLoading: true,
  viewMore: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case newsConstants.GET_NEWS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case newsConstants.GET_NEWS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case newsConstants.NEWS_VIEW_MORE:
      return {
        ...state,
        viewMore: !state.viewMore,
      };
    default:
      return state;
  }
};
