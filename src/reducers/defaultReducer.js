export const defaultReducer = (state = { readMore: false }, action) => {
  switch (action.type) {
    case "READ_MORE":
      return {
        ...state,
        readMore: !state.readMore,
      };
    default:
      return state;
  }
};
