import { userConstants } from "../constants/user.constants";

export const signUp = () => {
  return {
    type: userConstants.REGISTER_REQUEST,
  };
};

export const signIn = (user) => {
  return {
    type: userConstants.LOGIN_REQUEST,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: userConstants.LOGOUT,
  };
};

export const removeUser = () => {
  return {
    type: userConstants.DELETE_REQUEST,
  };
};
