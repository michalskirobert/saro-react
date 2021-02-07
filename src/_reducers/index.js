import { heroReducer } from "./hero.reducer";
import { navReducer, isScrolled } from "./nav.reducer";
import { defaultReducer } from "./default.reducer";
import { newsReducer } from "./news.reducer";
import { currentUserReducer } from "./auth.reducer";
import { alertsReducer } from "./alerts.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  default: defaultReducer,
  currentUser: currentUserReducer,
  hero: heroReducer,
  isNavOpen: navReducer,
  backgroundColor: isScrolled,
  homePage: newsReducer,
  alert: alertsReducer,
});

export default rootReducer;
