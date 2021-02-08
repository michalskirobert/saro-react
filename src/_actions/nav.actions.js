const navToggle = () => {
  return {
    type: "NAV_TOGGLE",
  };
};

const closeNav = () => {
  return {
    type: "CLOSE_NAV",
  };
};

const profileToggle = () => {
  return {
    type: "NAV_PROFILE_TOGGLE",
  };
};

const closeProfile = () => {
  return {
    type: "NAV_CLOSE_PROFILE",
  };
};

const navActions = {
  navToggle,
  closeNav,
  profileToggle,
  closeProfile,
};

export default navActions;
