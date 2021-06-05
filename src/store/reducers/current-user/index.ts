import * as CONSTANTS from "@utils/constants";

const defaultState = {
  currentUser: {},
};

export const currentUser = (state = defaultState, action): any => {
  switch (action.type) {
    case CONSTANTS.CMS_CONSTANTS.ADD_NEW_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
