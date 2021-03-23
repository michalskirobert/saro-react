import { userConstants } from "../../utils/constants/user.constants";

const signUpRequest = () => {
  return {
    type: userConstants.REGISTER_REQUEST,
  };
};

const signUp = (payload) => {
  return {
    type: userConstants.REGISTER_SUCCESS,
    payload,
  };
};

const signUpFailure = () => {
  return {
    type: userConstants.REGISTER_FAILURE,
  };
};

const signIn = (data) => {
  return {
    type: userConstants.LOGIN_SUCCESS,
    payload: data,
  };
};

const SignInRequest = () => {
  return {
    type: userConstants.LOGIN_REQUEST,
  };
};

const SignInFailure = (error) => {
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
  SignInRequest,
  SignInFailure,
  signUpRequest,
  signUpFailure,
};
