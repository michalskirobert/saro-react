export const homePageReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state,
        newsData: action.payload,
      };
    case "FETCH_EVENTS":
      return {
        ...state,
        eventsData: action.payload,
      };
    case "FETCH_POSTS":
      return {
        ...state,
        lastPosts: action.payload,
      }
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
