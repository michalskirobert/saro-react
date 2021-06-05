import { Dispatch } from "redux";

import { GENERAL_CONSTANTS, USER_CONSTANTS } from "@utils/constants";

const signUpRequest = () => (dispatch: Dispatch) =>
  dispatch({ type: USER_CONSTANTS.REGISTER_REQUEST });

const signUpSuccess = (payload?) => (dispatch: Dispatch) =>
  dispatch({ type: USER_CONSTANTS.REGISTER_SUCCESS, payload });

const signUpFailure = () => (dispatch: Dispatch) =>
  dispatch({ type: USER_CONSTANTS.REGISTER_FAILURE });

const signInSuccess = (data?) => (dispatch: Dispatch) =>
  dispatch({ type: USER_CONSTANTS.LOGIN_SUCCESS, payload: data });

const SignInRequest = () => (dispatch: Dispatch) =>
  dispatch({ type: USER_CONSTANTS.LOGIN_REQUEST });

const SignInFailure = (error?) => (dispatch: Dispatch) =>
  dispatch({ type: USER_CONSTANTS.LOGIN_FAILURE, payload: error });

const logout = () => (dispatch: Dispatch) =>
  dispatch({ type: USER_CONSTANTS.LOGOUT });

const removeUser = () => (dispatch: Dispatch) =>
  dispatch({ type: USER_CONSTANTS.DELETE_REQUEST });

const changeLanguage = (lang) => (dispatch: Dispatch) =>
  dispatch({ type: GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO[lang.toUpperCase()] });

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
