import { newsConstants } from "../_constants";

const viewMore = () => {
  return {
    type: newsConstants.NEWS_VIEW_MORE,
  };
};

export const newsActions = {
  viewMore,
};
