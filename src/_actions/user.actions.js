import { userConstants } from "./../_constants/user.constants";

const signUp = () => {
  return {
    type: userConstants.REGISTER_REQUEST,
  };
};

const signIn = (data, user) => {
  return {
    type: userConstants.LOGIN_SUCCESS,
    payload: data,
    user: user,
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

const userActions = {
  signIn,
  signUp,
  logout,
  removeUser,
  failure,
  request,
};

export default userActions;
