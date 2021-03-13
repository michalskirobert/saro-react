import { eventsConstants } from "../utils/_constants";

const defaultState = {
  isLoading: true,
  events: [],
};

export const eventsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case eventsConstants.GET_EVENTS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case eventsConstants.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
