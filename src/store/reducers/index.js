import { combineReducers } from "redux";
import { heroReducer } from "./hero";
import { currentUserReducer } from "./auth";
import { alertsReducer } from "./alerts";
import { cmsReducer } from "./cms";
import { database } from "./database";
import { generalReducer } from "./general";
import { stateStepsControlReducer } from "./state-steps-control";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  hero: heroReducer,
  alert: alertsReducer,
  database,
  CMS: cmsReducer,
  general: generalReducer,
  stateStepsControl: stateStepsControlReducer,
});

export default rootReducer;
