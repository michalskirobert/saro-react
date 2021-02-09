import { fetchConstants } from "./../_constants/fetch.constants";

export const fetchNews = (data) => {
  return {
    type: fetchConstants.NEWS,
    payload: data,
  };
};
