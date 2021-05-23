import { GENERAL_CONSTANTS, USER_CONSTANTS } from "@utils/constants";

const signUpRequest = () => {
  return {
    type: USER_CONSTANTS.REGISTER_REQUEST,
  };
};

const signUpSuccess = (payload?) => {
  return {
    type: USER_CONSTANTS.REGISTER_SUCCESS,
    payload,
  };
};

const signUpFailure = () => {
  return {
    type: USER_CONSTANTS.REGISTER_FAILURE,
  };
};

const signInSuccess = (data?) => {
  return {
    type: USER_CONSTANTS.LOGIN_SUCCESS,
    payload: data,
  };
};

const SignInRequest = () => {
  return {
    type: USER_CONSTANTS.LOGIN_REQUEST,
  };
};

const SignInFailure = (error?) => {
  return {
    type: USER_CONSTANTS.LOGIN_FAILURE,
    payload: error,
  };
};

const logout = () => {
  return {
    type: USER_CONSTANTS.LOGOUT,
  };
};

const removeUser = () => {
  return {
    type: USER_CONSTANTS.DELETE_REQUEST,
  };
};

const changeLanguage = (lang) => {
  return {
    type: GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO[lang.toUpperCase()],
  };
};

export const userActions = {
  signInSuccess,
  signUpSuccess,
  logout,
  removeUser,
  SignInRequest,
  SignInFailure,
  signUpRequest,
  signUpFailure,
  changeLanguage,
};
