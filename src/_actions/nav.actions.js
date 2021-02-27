import { navConstants } from "./../_constants/nav.constants";

const navToggle = () => {
  return {
    type: navConstants.TOGGLE,
  };
};

const closeNav = () => {
  return {
    type: navConstants.CLOSE,
  };
};

const profileToggle = () => {
  return {
    type: navConstants.PROFILE_TOGGLE,
  };
};

const closeProfile = () => {
  return {
    type: navConstants.CLOSE_PROFILE,
  };
};

export const navActions = {
  navToggle,
  closeNav,
  profileToggle,
  closeProfile,
};
