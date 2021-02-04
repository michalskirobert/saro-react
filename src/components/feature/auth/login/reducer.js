export const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    case "SIGN_UP":
      return !state;
    case "LOG_OUT":
      return state;
    default:
      return false;
  }
};

export const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    default:
      return state;
  }
};
