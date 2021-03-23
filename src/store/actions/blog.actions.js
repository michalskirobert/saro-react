import { BLOG_CONSTANTS } from "../../utils/constants/blog.constants";

const readMore = () => {
  return {
    type: BLOG_CONSTANTS.READ_MORE,
  };
};

const viewLess = () => {
  return {
    type: BLOG_CONSTANTS.VIEW_LESS,
  };
};

const getPostsRequest = () => {
  return {
    type: BLOG_CONSTANTS.GET_POSTS_REQ,
  };
};

const getPosts = (posts) => {
  return {
    type: BLOG_CONSTANTS.GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const blogActions = {
  readMore,
  viewLess,
  getPostsRequest,
  getPosts,
};
