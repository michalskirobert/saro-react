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

const blogActions = {
  readMore,
  viewLess,
};

export default blogActions;
