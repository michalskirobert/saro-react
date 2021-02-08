import { userConstants } from "../_constants/user.constants";

const userState = {
  isLogged: false,
};

export const currentUserReducer = (state = userState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...action.payload,
        isLogged: true,
      };
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLogged: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLogged: true,
      };
    case userConstants.LOGOUT:
      return {
        isLogged: false,
      };
    case userConstants.DELETE_SUCCESS:
      return {
        isLogged: false,
      };
    default:
      return state;
  }
};
