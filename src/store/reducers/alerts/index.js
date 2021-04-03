import { ALERT_CONSTANTS } from "@utils/constants";

const initialState = {
  alert: false,
  message: "",
  status: "",
};

export const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_CONSTANTS.SUCCESS:
      return {
        alert: true,
        message: action.message,
        status: ALERT_CONSTANTS.STATUS_SUCCESS,
      };
    case ALERT_CONSTANTS.ERROR:
      return {
        alert: true,
        message: action.message,
        status: ALERT_CONSTANTS.STATUS_ERROR,
      };
    case ALERT_CONSTANTS.CLEAR:
      return {
        alert: false,
        message: ALERT_CONSTANTS.MESSAGE_CLEAR,
        status: ALERT_CONSTANTS.STATUS_CLEAR,
      };
    default:
      return state;
  }
};
