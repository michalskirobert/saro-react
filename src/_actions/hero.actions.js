import { heroConstants } from "./../_constants/hero.constants";

export const hero = (index) => {
  return {
    type: heroConstants.JUMP,
    payload: index,
  };
};
