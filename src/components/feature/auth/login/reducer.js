const userState = {
  isLogged: false,
};

export const currentUserReducer = (state = userState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...action.payload,
        isLogged: true,
      };
    case "LOG_OUT":
      return {
        isLogged: false,
      };
    default:
      return state;
  }
};
