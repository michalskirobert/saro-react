import { heroConstants } from "../../../utils/constants/hero.constants.js";

export const heroReducer = (state = 0, action) => {
  switch (action.type) {
    case heroConstants.JUMP:
      return action.payload;
    default:
      return state;
  }
};
