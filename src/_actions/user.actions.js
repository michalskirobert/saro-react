import { userConstants } from "./../_constants/user.constants";

const signUp = () => {
  return {
    type: userConstants.REGISTER_SUCCESS,
  };
};

const signIn = (data) => {
  return {
    type: userConstants.LOGIN_SUCCESS,
    payload: data,
  };
};

const request = () => {
  return {
    type: userConstants.LOGIN_REQUEST,
  };
};

const failure = (error) => {
  return {
    type: userConstants.LOGIN_FAILURE,
    payload: error,
  };
};

const logout = () => {
  return {
    type: userConstants.LOGOUT,
  };
};

const removeUser = () => {
  return {
    type: userConstants.DELETE_REQUEST,
  };
};

export const userActions = {
  signIn,
  signUp,
  logout,
  removeUser,
  failure,
  request,
};
