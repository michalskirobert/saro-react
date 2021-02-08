const defaultState = {
  readMore: false,
  isRead: false,
  isLoading: true,
  seeMore: false,
};

export const defaultReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "READ_MORE":
      return {
        ...state,
        readMore: !state.readMore,
      };
    case "SEE_MORE":
      return {
        ...state,
        seeMore: !state.seeMore,
      };
    case "SEE_LESS":
      return {
        ...state,
        seeMore: false,
      };
    default:
      return state;
  }
};
