import { blogConstants } from "./../_constants/blog.constants";

const readMore = () => {
  return {
    type: blogConstants.READ_MORE,
  };
};

const viewLess = () => {
  return {
    type: blogConstants.VIEW_LESS,
  };
};

const getPostsRequest = () => {
  return {
    type: blogConstants.GET_POSTS_REQ,
  };
};

const getPosts = (posts) => {
  return {
    type: blogConstants.GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const blogActions = {
  readMore,
  viewLess,
  getPostsRequest,
  getPosts,
};
