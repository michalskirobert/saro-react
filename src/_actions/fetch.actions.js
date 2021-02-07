export const fetchNews = (data) => {
  return {
    type: "FETCH_NEWS",
    payload: data,
  };
};
