import { HERO_CONSTANTS } from "../../utils/constants/hero.constants";

export const hero = (index) => {
  return {
    type: HERO_CONSTANTS.JUMP,
    payload: index,
  };
};

export const heroActions = {
  hero,
};
