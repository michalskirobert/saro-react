import { ALERT_CONSTANTS } from "@utils/constants/alert.constants";

const success = (message) => {
  return { type: ALERT_CONSTANTS.SUCCESS, message };
};

const error = (message) => {
  return { type: ALERT_CONSTANTS.ERROR, message };
};

const clear = () => {
  return { type: ALERT_CONSTANTS.CLEAR };
};

export const alertActions = {
  success,
  error,
  clear,
};
