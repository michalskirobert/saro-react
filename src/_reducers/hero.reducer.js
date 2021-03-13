import { heroConstants } from "../utils/_constants/hero.constants";

export const heroReducer = (state = 0, action) => {
  switch (action.type) {
    case heroConstants.JUMP:
      return action.payload;
    default:
      return state;
  }
};
