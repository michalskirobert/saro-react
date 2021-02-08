import { userConstants } from "./../_constants/user.constants";

const signUp = () => {
  return {
    type: userConstants.REGISTER_REQUEST,
  };
};

const signIn = (user) => {
  return {
    type: userConstants.LOGIN_SUCCESS,
    payload: user,
  };
};

const request = (user) => {
  return {
    type: userConstants.LOGIN_REQUEST,
    payload: user,
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

const userActions = {
  signIn,
  signUp,
  logout,
  removeUser,
  failure,
  request,
};

export default userActions;
