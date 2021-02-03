import { isLoggedReducer } from "./../components/feature/auth/login/reducer";
import { heroReducer } from "./../components/layout/hero/reducer";
import { navReducer, isScrolled } from "./../components/layout/nav/reducer";
import { defaultReducer } from "./defaultReducer";
import { homePageReducer } from "./../pages/public/home/reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  default: defaultReducer,
  isLogged: isLoggedReducer,
  hero: heroReducer,
  isNavOpen: navReducer,
  backgroundColor: isScrolled,
  homePage: homePageReducer,
});

export default rootReducer;
