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
        status: "success",
      };
    case alertConstants.ERROR:
      return {
        alert: true,
        message: action.message,
        status: "dangerous",
      };
    case alertConstants.CLEAR:
      return {
        alert: false,
        message: "",
        status: "",
      };
    default:
      return state;
  }
};
