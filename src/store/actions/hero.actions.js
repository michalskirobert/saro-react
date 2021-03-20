import { heroConstants } from "../../utils/constants/hero.constants";

export const hero = (index) => {
  return {
    type: heroConstants.JUMP,
    payload: index,
  };
};

export const heroActions = {
  hero,
};
