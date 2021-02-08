export const heroReducer = (state = 0, action) => {
  switch (action.type) {
    case "JUMP_TO":
      return action.payload;
    default:
      return state;
  }
};
