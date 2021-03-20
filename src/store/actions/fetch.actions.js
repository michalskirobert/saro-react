import { newsConstants } from "../../utils/constants";

export const fetchNewsRequest = () => {
  return {
    type: newsConstants.GET_NEWS_REQ,
  };
};

export const fetchNews = (data) => {
  return {
    type: newsConstants.GET_NEWS_SUCCESS,
    payload: data,
  };
};

export const fetchActions = {
  fetchNews,
  fetchNewsRequest,
};
