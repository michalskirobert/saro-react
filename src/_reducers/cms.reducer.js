import { cmsConstants } from "./../_constants";

const defaultState = {
  isLoading: false,
  alert: false,
  alertMsg: "",
  alertType: "",
};

export const cmsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case cmsConstants.ADD_NEWS_REQUEST:
      return {
        isLoading: true,
      };
    case cmsConstants.ADD_NEWS_SUCCESS:
      return {
        isLoading: false,
        alert: true,
        alertMsg: "Post has been published",
        alertType: "success",
      };
    case cmsConstants.ADD_NEWS_FAILURE:
      return {
        isLoading: false,
        alert: true,
        alertMsg: "We had a problem... Please try again...",
        alertType: "danger",
      };
    default:
      return state;
  }
};
