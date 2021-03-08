import { heroReducer } from "./hero.reducer";
import { navReducer, isScrolled } from "./nav.reducer";
import { generalReducer } from "./general.reducer";
import { newsReducer } from "./news.reducer";
import { currentUserReducer } from "./auth.reducer";
import { alertsReducer } from "./alerts.reducer";
import { eventsReducer } from "./events.reducer";
import { blogReducer } from "./blog.reducer";
import { cmsReducer } from "./cms.reducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer,
  currentUser: currentUserReducer,
  hero: heroReducer,
  isNavOpen: navReducer,
  backgroundColor: isScrolled,
  news: newsReducer,
  alert: alertsReducer,
  events: eventsReducer,
  blog: blogReducer,
  CMS: cmsReducer,
});

export default rootReducer;
