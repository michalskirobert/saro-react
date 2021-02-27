import { userConstants } from "../_constants/user.constants";

const userState = {
  uid: 0,
  username: "",
  email: "",
  hobbies: "",
  firstName: "",
  lastName: "",
  nativeLang: "",
  studyingLang: "",
  about: "",
  isLogged: false,
};

export const currentUserReducer = (state = userState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLogged: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...action.payload,
        isLogged: true,
      };
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        isLogged: false,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...action.payload,
        isLogged: false,
      };
    case userConstants.LOGOUT:
      return userState;
    case userConstants.DELETE_SUCCESS:
      return {
        isLogged: false,
      };
    default:
      return state;
  }
};
