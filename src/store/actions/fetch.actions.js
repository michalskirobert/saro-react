import { NEWS_CONSTANTS } from "../../utils/constants";

const fetchNewsRequest = () => {
  return {
    type: NEWS_CONSTANTS.GET_NEWS_REQ,
  };
};

const fetchNews = (data) => {
  return {
    type: NEWS_CONSTANTS.GET_NEWS_SUCCESS,
    payload: data,
  };
};

export const fetchActions = {
  fetchNews,
  fetchNewsRequest,
};
