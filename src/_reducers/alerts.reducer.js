import { alertConstants } from "../_constants/alert.constants";

const initialState = {
  alert: false,
  message: "",
  status: "",
};

export const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        alert: true,
        message: action.message,
        status: alertConstants.STATUS_SUCCESS,
      };
    case alertConstants.ERROR:
      return {
        alert: true,
        message: action.message,
        status: alertConstants.STATUS_ERROR,
      };
    case alertConstants.CLEAR:
      return {
        alert: false,
        message: alertConstants.MESSAGE_CLEAR,
        status: alertConstants.STATUS_CLEAR,
      };
    default:
      return state;
  }
};
