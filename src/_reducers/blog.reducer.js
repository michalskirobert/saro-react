import { blogConstants } from "../utils/_constants";

const defaultState = {
  isLoading: true,
  posts: [],
};

export const blogReducer = (state = defaultState, action) => {
  switch (action.type) {
    case blogConstants.GET_POSTS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case blogConstants.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
