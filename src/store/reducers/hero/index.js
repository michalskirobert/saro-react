import { HERO_CONSTANTS } from "@utils/constants/hero.constants.js";

export const heroReducer = (state = 0, action) => {
  switch (action.type) {
    case HERO_CONSTANTS.JUMP:
      return action.payload;
    default:
      return state;
  }
};
