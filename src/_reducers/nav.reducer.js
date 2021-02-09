import { navConstants } from "./../_constants/nav.constants";

export const navReducer = (state = false, action) => {
  switch (action.type) {
    case navConstants.TOGGLE:
      return !state;
    case navConstants.CLOSE:
      return false;
    default:
      return state;
  }
};

export const isScrolled = (state = "transparent", action) => {
  switch (action.type) {
    case navConstants.SCROLLED:
      return action.payload;
    default:
      return state;
  }
};
