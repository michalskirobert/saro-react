import { heroReducer } from "./hero.reducer";
import { navReducer, isScrolled } from "./nav.reducer";
import { defaultReducer } from "./default.reducer";
import { newsReducer } from "./news.reducer";
import { currentUserReducer } from "./auth.reducer";
import { alertsReducer } from "./alerts.reducer";
import { eventsReducer } from "./events.reducer";
import { blogReducer } from "./blog.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  default: defaultReducer,
  currentUser: currentUserReducer,
  hero: heroReducer,
  isNavOpen: navReducer,
  backgroundColor: isScrolled,
  news: newsReducer,
  alert: alertsReducer,
  events: eventsReducer,
  blog: blogReducer,
});

export default rootReducer;
