import { USER_CONSTANTS } from "@utils/constants/";

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
  isLogged: false,
  isLoading: false,
  status: 0,
};

export const currentUserReducer = (state = userState, action) => {
  switch (action.type) {
    case USER_CONSTANTS.LOGIN_REQUEST:
      return {
        ...state,
        isLogged: true,
        isLoading: true,
      };
    case USER_CONSTANTS.LOGIN_SUCCESS:
      return {
        ...action.payload,
        isLogged: true,
        isLoading: false,
      };
    case USER_CONSTANTS.LOGIN_FAILURE:
      return {
        ...state,
        isLogged: false,
        isLoading: false,
      };
    case USER_CONSTANTS.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLogged: false,
      };
    case USER_CONSTANTS.REGISTER_SUCCESS:
      return {
        ...action.payload,
        isLogged: true,
        isLoading: false,
      };
    case USER_CONSTANTS.LOGOUT:
      return userState;
    case USER_CONSTANTS.DELETE_SUCCESS:
      return {
        isLogged: false,
      };
    default:
      return state;
  }
};
