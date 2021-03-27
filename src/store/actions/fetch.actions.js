import { NEWS_CONSTANTS } from "../../utils/constants";

const fetchNewsRequest = () => {
  return {
    type: NEWS_CONSTANTS.GET_NEWS_REQ,
  };
};

const fetchNews = (payload) => {
  return {
    type: NEWS_CONSTANTS.GET_NEWS_SUCCESS,
    payload,
  };
};

export const fetchActions = {
  fetchNews,
  fetchNewsRequest,
};
