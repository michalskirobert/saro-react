import { alertConstants } from "../_constants/alert.constants";

const success = (message) => {
  return { type: alertConstants.SUCCESS, message };
};

const error = (message) => {
  return { type: alertConstants.ERROR, message };
};

const clear = () => {
  return { type: alertConstants.CLEAR };
};

export const alertActions = {
  success,
  error,
  clear,
};