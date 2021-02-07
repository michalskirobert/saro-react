export const navReducer = (state = false, action) => {
  switch (action.type) {
    case "NAV_TOGGLE":
      return !state;
    case "CLOSE_NAV":
      return false;
    default:
      return state;
  }
};

export const isScrolled = (state = "transparent", action) => {
  switch (action.type) {
    case "NAV_SCROLLED":
      return action.payload;
    default:
      return state;
  }
};
