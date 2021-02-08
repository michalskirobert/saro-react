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
      const data = action.payload;
      const user = action.user;
      return {
        uid: user.uid,
        username: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        hobbies: data.hobbies,
        firstName: data.lastName,
        nativeLang: data.nativeLang,
        studyingLang: data.studyingLang,
        about: data.about,
        isLogged: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLogged: true,
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
