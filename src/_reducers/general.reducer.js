const defaultState = {
  readMore: false,
  isRead: false,
  isLoading: true,
  viewMore: false,
  profileToggle: false,
  language: "en",
};

export const generalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "BLOG_READ_MORE":
      return {
        ...state,
        readMore: !state.readMore,
      };
    case "BLOG_SEE_MORE":
      return {
        ...state,
        seeMore: !state.seeMore,
      };
    case "BLOG_VIEW_LESS":
      return {
        ...state,
        seeMore: false,
      };
    case "NAV_PROFILE_TOGGLE":
      return {
        ...state,
        profileToggle: !state.profileToggle,
      };
    case "NAV_CLOSE_PROFILE":
      return {
        ...state,
        profileToggle: false,
      };
    default:
      return state;
  }
};