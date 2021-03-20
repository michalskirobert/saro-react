import { combineReducers } from "redux";
import { heroReducer } from "./hero";
import { currentUserReducer } from "./auth";
import { alertsReducer } from "./alerts";
import { cmsReducer } from "./cms";
import { database } from "./database";
import { generalReducer } from "./general";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  hero: heroReducer,
  alert: alertsReducer,
  database,
  CMS: cmsReducer,
  general: generalReducer,
});

export default rootReducer;
