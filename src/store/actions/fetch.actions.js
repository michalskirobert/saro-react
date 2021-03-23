import { NEWS_CONSTANTS } from "../../utils/constants";

export const fetchNewsRequest = () => {
  return {
    type: NEWS_CONSTANTS.GET_NEWS_REQ,
  };
};

export const fetchNews = (data) => {
  return {
    type: NEWS_CONSTANTS.GET_NEWS_SUCCESS,
    payload: data,
  };
};

export const fetchActions = {
  fetchNews,
  fetchNewsRequest,
};
