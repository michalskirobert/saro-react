import { HERO_CONSTANTS } from "@utils/constants/hero.constants";

export const hero = (index) => ({
  type: HERO_CONSTANTS.JUMP,
  payload: index,
});

export const getHeroRequest = () => ({ type: HERO_CONSTANTS.GET_HERO_REQUEST });
export const getHeroSuccess = (payload) => ({
  type: HERO_CONSTANTS.GET_HERO_SUCCESS,
  payload,
});
export const getHeroFailure = () => ({ type: HERO_CONSTANTS.GET_HERO_FAILURE });

export const heroActions = {
  hero,
  getHeroRequest,
  getHeroSuccess,
  getHeroFailure,
};
