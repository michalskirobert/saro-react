import { userConstants } from "../../../utils/constants/";

const userState = {
  uid: 0,
  username: "anonymous",
  email: "anonymous",
  hobbies: "",
  firstName: "",
  lastName: "",
  nativeLang: "",
  studyingLang: "",
  about: "",
  role: "user",
  isLogged: false,
  isLoading: false,
};

export const currentUserReducer = (state = userState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLogged: true,
        isLoading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...action.payload,
        isLogged: true,
        isLoading: false,
      };
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLogged: false,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...action.payload,
        isLogged: true,
        isLoading: false,
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