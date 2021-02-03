export const getNewsData = (data) => {
  return {
    type: "FETCH_NEWS",
    payload: data,
  };
};
